import React, { useState, useEffect } from 'react';
import { doApiGet, apiUrl, doApiPost } from '../services/apiService';
import DarkBox from './darkBox';
import "../css_comps/contacts.css";

function ContactsList(props) {
  let [darkState, setDarkState] = useState("d-none");
  let [contacts_ar, setContactsArr] = useState([]);
  let [counterApi, setCounterApi] = useState(0);
  let [singleItem, setSingleItem] = useState({});

  useEffect(() => {
    document.getElementById("id_dark").className = darkState;

  }, [darkState])

  useEffect(() => {
    let url = apiUrl + "users"
    doApiGet(url)
      .then(data => {
        console.log("contactsList", data);
        setContactsArr(data);
      })
  }, [counterApi])

  const delcontact = async (_id) => {
    let userChoose = global.confirm("Are you sure you want to delete?");
    if (userChoose) {
      let url = apiUrl + "users/del";
      let data = await doApiPost(url, { del: _id });
      console.log(data);
      if (data.message) {
        setCounterApi(counterApi + 1)
      }
      else {
        alert("error something not work!")
      }

    }
  }

  return (
    <div className="container-fluid ">
      <div id="id_dark" className="dark container-fluid center">
        <DarkBox setDarkState={setDarkState} item={singleItem} setContactsArr={setContactsArr} />
      </div>
      <div className="container">
        <h2 className="text-center mt-4 display-4 text-info">Contacts list in the system</h2>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Area Code</th>
              <th>Phone</th>
              <th>Edit/delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts_ar.map((item, i) => {
              return (
                <tr key={item._id}  >
                  <td className="align-middle">{i + 1}</td>
                  <td className="align-middle">{item.first_name}</td>
                  <td className="align-middle">{item.last_name}</td>
                  <td className="align-middle">{item.email}</td>
                  <td className="align-middle">{item.area_code}</td>
                  <td className="align-middle">{item.phone}</td>
                  <td className="align-middle">
                    <button onClick={() => {
                      setDarkState("dark container-fluid center")
                      setSingleItem(item)
                    }} className="btn btn-warning mr-2">Edit</button>
                    <button onClick={() => { delcontact(item._id) }} className="btn btn-danger mr-2">Del</button>

                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>

  )
}

export default ContactsList
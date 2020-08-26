import React from 'react';
import { useHistory } from 'react-router-dom';
import { doApiPost, apiUrl } from '../services/apiService';
import { Link } from "react-router-dom"
import "../css_comps/contacts.css"
function NewContact(props) {

  let history = useHistory();
  let sendForm = (event) => {
    event.preventDefault();
    let phoneInput = event.target.id_phone;
    if (phoneInput.value.length === 10 && phoneInput.value[0] === "0") {
      phoneInput = phoneInput.value.substring(1);
    }
    let bodyData = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.id_email.value,
      area_code: event.target.id_code.value,
      phone: phoneInput,

    }
   
    let url = apiUrl + "users/add"
    doApiPost(url, bodyData)
      .then(data => {
        // console.log("doApiPost", data);
        if (data.message) {
          console.log("data.message", data.message);
          alert(data.message);
        }
        else {
          console.log("data", data);
          history.push("/contacts/");
        }

      })

  }

  return (
    <div className="container registr">
      <h1 className="mt-5 text-center">Contact Registration</h1>
      <div className="col new">
        <form className="col-lg-6" onSubmit={sendForm}>
          <div className="row mb-3">
            <div className="col-3">
              <label className="float-left">First Name: </label>
            </div>
            <div className="col-9">
              <input id="first_name" type="text" className="form-control" placeholder="First Name" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3">
              <label className="float-left">Last Name:</label>
            </div>
            <div className="col-9">
              <input id="last_name" type="text" className="form-control" placeholder="Last Name" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3">
              <label className="float-left">Email:</label>
            </div>
            <div className="col-9">
              <input id="id_email" type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3">
              <label className="float-left">Phone:</label>
            </div>
            <div className="col-3">
              <select className="form-control" id="id_code">
                <option value="">area code</option>
                <option value="+972">+972</option>
                <option value="+39">+39</option>
                <option value="+1">+1</option>
                <option value="+595">+595</option>
                <option value="+678">+678</option>
              </select>
            </div>
            <div className="col-6">
              <input id="id_pass" type="text" className="form-control" placeholder="Phone number" id="id_phone" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-success mt-3 w-25">Add</button>
            <Link to={"/contacts/"} className="btn btn-info mt-3">show contacts</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewContact
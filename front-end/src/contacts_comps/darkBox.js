import React, { useEffect, useState } from 'react';
import "../css_comps/contacts.css"
import { apiUrl, doApiPost, doApiGet } from '../services/apiService';
function DarkBox(props) {

    let [counterApi, setCounterApi] = useState(0);
    let item = props.item;

    useEffect(() => {
        document.getElementById("id_error").innerHTML = ""
        let url = apiUrl + "users"
        doApiGet(url)
            .then(data => {
                console.log("contactsList", data);
                props.setContactsArr(data)
            })
    }, [counterApi])

    const sendForm = (event) => {
        event.preventDefault();
        let phoneInput = event.target.id_phone;
        if (event.target.id_phone.value.length === 10 && event.target.id_phone.value[0] === "0") {
            event.target.id_phone.value = event.target.id_phone.value.substring(1);
        }
        let bodyData = {
            id: item._id,
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
            email: event.target.id_email.value,
            area_code: event.target.id_code.value,
            phone: event.target.id_phone.value,
        }

        doApiPost(apiUrl + "users/edit", bodyData)
            .then(data => {
                if (data.nModified == 1) {
                    // alert("user info is being update")
                    setCounterApi(counterApi + 1);
                    props.setDarkState("d-none");
                }

                else {
                    console.log("data.message", data.message);
                    // alert(data.message);
                    document.getElementById("id_error").innerHTML = "Error: " + data.message;
                }

            })
    }

    return (
        <div className="dark_inside text-center ">
            <div className="d-flex justify-content-center align-items-center py-3 ">
                <form className="col text-center mt-1 " onSubmit={sendForm}>

                    <div className="row mb-3">
                        <div className="col-3">
                            <label className="float-left">First Name: </label>
                        </div>
                        <div className="col-9">
                            <input id="first_name" type="text" className="form-control" placeholder="First Name" defaultValue={item.first_name} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label className="float-left">Last Name:</label>
                        </div>
                        <div className="col-9">
                            <input id="last_name" type="text" className="form-control" placeholder="Last Name" defaultValue={item.last_name} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label className="float-left">Email:</label>
                        </div>
                        <div className="col-9">
                            <input id="id_email" type="text" className="form-control" placeholder="Email" defaultValue={item.email} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label className="float-left">Phone:</label>
                        </div>
                        <div className="col-3">
                            <select className="form-control" id="id_code" >
                                <option value={item.area_code}>{item.area_code}</option>
                                <option value="+972">+972</option>
                                <option value="+39">+39</option>
                                <option value="+1">+1</option>
                                <option value="+595">+595</option>
                                <option value="+678">+678</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <input id="id_pass" type="text" className="form-control" placeholder="Phone number" id="id_phone" defaultValue={item.phone} />
                        </div>
                    </div>
                    <div className=" text-center">
                        <button className="btn btn-danger mr-3 " onClick={() => { props.setDarkState("d-none") }}>Close</button>
                        <button className="btn btn-info" >Update</button>
                        <div className="text-left">
                            <div id="id_error" className="text-danger mt-2"></div>
                        </div>
                    </div>
                </form>
            </div>



        </div>
    )
}

export default DarkBox
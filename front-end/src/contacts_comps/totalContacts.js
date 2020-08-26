import React, { useState, useEffect } from 'react';
import { doApiGet, apiUrl } from '../services/apiService';
import "../css_comps/contacts.css";
function TotalContacts(props) {
    let [total, setTotal] = useState("");

    useEffect(() => {
        let url = apiUrl + "users/countContacts"
        doApiGet(url)
            .then(data => {
                console.log(data.doucuments);
                setTotal(data.doucuments)
            })
    }, [])
    return (
        <div className="container new">
            <div className="border border-info rounded bg-info text-white p-3 display-4 " >count of contacts is: <span className="text-warning">{total}</span></div>
        </div>

    )
}

export default TotalContacts
import React from 'react';
import { Link, useHistory } from "react-router-dom"
import "../css_comps/contacts.css"
function Nav(props) {
    return (
        <nav className="container bg-secondary text-dark d-flex align-items-center">
            <div className="row">
                <Link to={"/"} className="text-decoration-none">Registration</Link>
                <Link to={"/contacts/"} className="text-decoration-none">Contacts Table</Link>
                <Link to={"/total/"} className="text-decoration-none">Total contacts</Link>
                </div>
        </nav>
    )
}

export default Nav
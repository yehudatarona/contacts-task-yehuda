import React from 'react';
import NewContact from './newContact';
import ContactsList from './contactsList';
import TotalContacts from './totalContacts';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../css_comps/contacts.css";

import Nav from './nav';

function AppContacts(props) {
    return (
        <div  className="backg">

            <Router>
                <Nav />
                {/* <Route exact path={"/","/contacts/","/total/"} component={Nav} /> */}
                <Route exact path={"/"} component={NewContact} />
                <Route exact path={"/contacts/"} component={ContactsList} />
                <Route exact path={"/total/"} component={TotalContacts} />
                
            </Router>

        </div>
    )
}

export default AppContacts



 {/* <Switch>

                    <Route exact path={["/", "/contacts/", "/total/"]} render={() => {
                        return (
                            <React.Fragment>
                                <Nav />
                            </React.Fragment>
                        )
                    }
                    } />

                    <Route exact path={"/", "/contacts/", "/total/"} component={Nav} />
                    <Route exact path={"/"} component={NewContact} />
                    <Route exact path={"/contacts/"} component={ContactsList} />
                    <Route exact path={"/total/"} component={TotalContacts} />

                </Switch> */}
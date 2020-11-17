import React, { Component } from 'react' ;


//import {NavLink} from "react-router-dom" ;


export default class Header extends Component{
    render() {
        return(
            <header className="navbar navbar-expand-lg navbar-light bg-light">

                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                        </a>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">



                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary">
                                        <strong>Contact</strong>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>






        );
    }
}

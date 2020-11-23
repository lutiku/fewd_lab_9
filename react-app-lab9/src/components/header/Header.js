import React, { Component } from 'react' ;
import Style from './Header.module.css'


//import {NavLink} from "react-router-dom" ;


class ClickButton extends Component{
    constructor() {
        super();
        this.state = {
            clickNum: 0
        };
        this.handleClicks = this.handleClicks.bind(this);
    }
    handleClicks(){
        this.setState(prevState => ({
            clickNum: prevState.clickNum + 1
        }));
    }

    render() {
        return(

                <section className={"hero is-medium is-black is-bold" + Style.back} onClick={this.handleClicks}>
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Articles and tips
                            </h1>
                            <h2 className="subtitle">
                                The banner is clicked {this.state.clickNum} time(s).
                            </h2>
                        </div>
                    </div>
                </section>





        );
    }
}


export default class Header extends Component{
    render() {
        return(
            <>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <p className="title">Bulma</p>
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
                            <a className="navbar-item">
                                Home
                            </a>

                            <a className="navbar-item">
                                Documentation
                            </a>

                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    More
                                </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        About
                                    </a>
                                    <a className="navbar-item">
                                        Jobs
                                    </a>
                                    <a className="navbar-item">
                                        Contact
                                    </a>
                                    <hr className="navbar-divider"/>
                                        <a className="navbar-item">
                                            Report an issue
                                        </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-black">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a className="button is-light">
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


       <ClickButton/>



        </>










        );
    }
}

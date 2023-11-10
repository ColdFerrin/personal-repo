import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import logo from "./ferrinlogo.svg"

export function Header() {
    return (
        <header>
            <div className="Header w3-flat-clouds">
                <div className="Header-Box">
                    <div className="Header-Left">
                        <div className="Header-Home">
                            <Link to="/">
                                <div className={'Link-surround'}>
                                    <img src={logo} className="logo"
                                         alt="logo"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="Header-Right">
                        <div className="Header-Resume">
                            <Link to="/resume" style={{textDecoration: 'none', color: 'black'}}>
                                <div className={'Link-surround'}>
                                    <p className={'Link'}>
                                        Resume
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className={"Header-Projects"}>
                            <Link to="/projects" style={{textDecoration: 'none', color: 'black'}}>
                                <div className={'Link-surround'}>
                                    <p className={'Link'}>
                                        Projects
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="Header-Contact">
                            <Link to="/contact" style={{textDecoration: 'none', color: 'black'}}>
                                <div className={'Link-surround'}>
                                    <p className={'Link'}>
                                        Contact Me
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}



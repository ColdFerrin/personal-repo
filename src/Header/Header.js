import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

export class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="Header">
                    <div className="Header-Left">
                        <div className="Header-Home">
                            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                                <div className={'Link-surround'}>
                                    <p className={'Link'}>
                                        Home
                                    </p>
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
            </header>
        )
    }
}



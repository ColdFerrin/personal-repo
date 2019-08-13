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
                            <Link to="/" >Home</Link>
                        </div>
                    </div>
                    <div className="Header-Right">
                        <div className="Header-Resume">
                            <Link to="/resume">Resume</Link>
                        </div>
                        <div className="Header-Contact">
                            <Link to="/contact">Contact Me</Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}



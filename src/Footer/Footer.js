import React from 'react';
import '../App.css';
import './Footer.css';
import github from './github.svg';
import linkedin from './linkedin.svg';
import twitter from './twitter.svg';

export class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div className="center">
                    <ul>
                        <a href='https://github.com/ColdFerrin'><img src={github} className="Footer-github"
                                                                     alt="github"/></a>


                        <a href='https://www.linkedin.com/in/ferrinkatz/'><img src={linkedin}
                                                                               className="Footer-linkedin"
                                                                               alt="linkedin"/></a>

                        <a href='https://twitter.com/coldferrin'> <img src={twitter}
                                                                       className="Footer-twitter"
                                                                       alt="twitter"/></a>
                    </ul>
                </div>
            </div>
        )
    }
}

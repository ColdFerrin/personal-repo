import React from 'react';
import './Index.css';
import Ferrin from "./Ferrin.png"

export class Index extends React.Component{
    render () {
        return (
            <div className="Body-Box">
                <div className="Body-Left">
                    <div>
                        <img className={"Body-Img"} src={Ferrin} alt={"ferrin headshot"}/>
                    </div>
                </div>
                <div className="Body-Right">
                    <div className="Body-Content">
                        {/* eslint-disable-next-line no-useless-concat */}
                        <h1 className={"inline-block"}>I'm</h1><h1 className={"color inline-block right-sp"}> Ferrin Katz</h1>

                    </div>
                </div>
            </div>
        )
    }
}

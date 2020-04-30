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
                        <h1 className={"inline-block min-bot-margin"}>I'm</h1><h1 className={"color inline-block left-sp min-bot-margin"}> Ferrin Katz</h1>
                        <h3>Full Stack Software Engineer</h3>
                        <p>I have experience in server and serverless full stack web applications. As well as cloud computing, machine learning, embedded systems, real time systems, and high assurance systems.</p>
                        <h2 className={'color'}>Objective</h2>
                        <p>I am seeking a challenging and competitive full time position in the Los Angeles area, where i can serve your company and develop a fulfilling career.</p>
                        <p></p>
                        <p>Yours Respectfully,</p>

                    </div>
                </div>
            </div>
        )
    }
}

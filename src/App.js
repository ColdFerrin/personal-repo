import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import {Header} from './Header/Header'
import {Footer} from "./Footer/Footer";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <div className="Body">
                        <p>this is a body</p>
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;

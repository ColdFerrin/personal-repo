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
                    <p>this is a body</p>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;

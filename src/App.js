import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import {Header} from './Header/Header'
import {Footer} from "./Footer/Footer";
import {Contact} from "./Body/Contact";
import {Index} from "./Body/Index";
import {Resume} from "./Body/Resume";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <div className="Body">
                        <Route path={'/'} exact component={Index}/>
                        <Route path={'/resume'} component={Resume}/>
                        <Route path={'/contact'} component={Contact}/>
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;

import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import {Header} from './Header/Header'
import {Footer} from "./Footer/Footer";
import {Contact} from "./Body/Contact";
import {Index} from "./Body/Index";
import {Resume} from "./Body/Resume";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="Body">
                    <Switch>
                        <Route path={'/'} exact component={Index}/>
                        <Route path={'/resume'} component={Resume}/>
                        <Route path={'/contact'} component={Contact}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;

import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import {Header} from './Header/Header'
import {Footer} from "./Footer/Footer";
import {Contact} from "./Body/Contact";
import {Index} from "./Body";
import {Resume} from "./Body/Resume";
import {Projects} from "./Body/Projects";

export function App() {
    return (
        <div className="App">
            <Header/>
            <div className="Body">
                <Routes>
                    <Route path={'/'} element={<Index />}/>
                    <Route path={'/resume'} element={<Resume />}/>
                    <Route path={'/projects'} element={<Projects />}/>
                    <Route path={'/contact'} element={<Contact />}/>
                </Routes>
            </div>
            <Footer/>

        </div>
    );
}

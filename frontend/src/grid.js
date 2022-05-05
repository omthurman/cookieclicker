

import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import './App.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Com from './com';
// import Route from 'react';
import { useNavigate } from "react-router-dom";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import realcookie from "./realcookie.png";

// import TestGrid from "./grid";





const TestGrid = () => {
    return (
        <header className="App-header">
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Com">Com</Link>
                            </li>
                            <li>
                                <Link to="/grid">TestGrid</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm">



                        <button className="btnC"><img src={realcookie} className="Hentai-logo" alt="logo" /></button>

                        <br />



                    </div>
                    <div class="col-sm">
                        One of three columns
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TestGrid;

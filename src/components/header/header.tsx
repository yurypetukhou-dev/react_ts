import React from "react";
import {NavLink} from "react-router-dom";

export  const Header: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">List of todos</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
            </ul>
        </div>
    </nav>
)
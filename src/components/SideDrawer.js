import React from "react";

import './SideDrawer.css';

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Meetings</a></li>
            <li><a href="/">Contracts</a></li>
            <li><a href="/">Finished Projects</a></li>
        </ul>
    </nav>
);

export default sideDrawer;
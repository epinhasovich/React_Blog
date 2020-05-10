import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Profile from './Profile';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link className="home-menu" to="/">Home</Link>
            <Link className="profile-menu" to="/profile">Profile</Link>
        </div>
    )
}

export default NavBar;
import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <nav class="navbar sticky-top  navbar-expand-lg  ml-navbar">
            <div class="container">
                <NavLink to="/home" activeStyle={activeStyle} >
                    <a class="navbar-brand ml-nav-brand" >MUSIC-LAND</a>

                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item custom">

                            <NavLink to="/home">
                                <a class="nav-link " aria-current="page">HOME</a>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink activeStyle={activeStyle} to="/about">
                                <a class="nav-link ">ABOUT US</a>

                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/allservices">
                                <a class="nav-link active" >SERVICES</a>

                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/blog">

                                <a class="nav-link ">BLOG</a>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact">
                                <a class="nav-link active">CONTACTS</a>

                            </Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
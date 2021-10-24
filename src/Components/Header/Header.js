import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <nav class="navbar  navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">MUSIC-LAND</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav mx-5">
                        <li class="nav-item">
                            <NavLink to="/home">
                                <a class="nav-link active" aria-current="page">HOME</a>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink activeStyle={activeStyle} to="/about">
                                <a class="nav-link ">ABOUT US</a>

                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/services">
                                <a class="nav-link active" >SERVICES</a>

                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/blog">

                                <a class="nav-link active music-land-anchor" href="#">BLOG</a>
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
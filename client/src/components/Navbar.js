import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-4">
                <div class="container">
                    <a class="navbar-brand ms-5" href="javascript:void(0)">MERN APPLICATION...</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link to="/" class="nav-link me-4">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link me-4">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link me-4">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link me-4">login</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/register" class="nav-link me-4">Registration</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
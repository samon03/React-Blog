import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">Blog</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                            <Link class="nav-link mt-2" to="/add">Add Blog</Link>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link">
                                    <button type="button" class="btn btn-outline-info">Sign In</button>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

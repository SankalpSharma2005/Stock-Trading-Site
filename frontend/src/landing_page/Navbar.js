import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg style border-bottom" style={{ backgroundColor: "#FFF" }}>
            <div class="container p-2">
                <Link class="navbar-brand" to="/">
                    <img src='media/logo.svg' alt='Logo' style={{ width: "25%" }} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/signup" style={{ color: "#666" }}>Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about" style={{ color: "#666" }}>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/product" style={{ color: "#666" }}>Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/pricing" style={{ color: "#666" }}>Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/support" style={{ color: "#666" }}>Support</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" style={{ color: "#424242" }}><i class="fa fa-bars" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
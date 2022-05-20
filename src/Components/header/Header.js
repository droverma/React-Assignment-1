
import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav">
                    <Link to="/"className="nav-item nav-link">All News</Link>
                    <Link to="/"className="nav-item nav-link">Read Now</Link>
                    <Link to="/"className="nav-item nav-link">Category</Link>
                    <Link to="/"className="nav-item nav-link">Search News</Link>
                </div>
            </div>
            <a href="/" className="navbar-brand">News Reader <i className="fa fa-newspaper-o fa-2"></i></a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

        </div>
    </nav>

}
export default Header;
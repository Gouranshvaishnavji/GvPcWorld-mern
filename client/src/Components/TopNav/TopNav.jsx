import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css'; 
const TopNav = () => {
    return (
        <nav className="top-nav">
            <div className="logo-container">
                <Link to="/" className="logo-link">
                  <h2 id='text-logo'>GvPcWorld</h2 >
                </Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search…" className="search-input" />
            </div>
            <ul className="nav-links">
                <li><Link to="/about-us" className="nav-item">About Us</Link></li>
                <li><Link to="/login" className="nav-item">Login/Signup</Link></li>
                <li><Link to="/cart" className="nav-item">Cart</Link></li>
            </ul>
        </nav>
    );
};

export default TopNav;


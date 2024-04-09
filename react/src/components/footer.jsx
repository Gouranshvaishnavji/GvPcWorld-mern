import React from "react";
import './footer.css';
import {Link, NavLink} from 'react-router-dom';
export default function Footer() {
    return (
    <>
    <div id="footer">
        <div id="navigation">
            <div className="nav-section">
                <button><Link to="/about">About Us</Link></button>
                <button><Link to="/contact">Contact Us</Link></button>
                <button><Link to="/terms">Terms of Service</Link></button>
            </div>
        </div>
        <footer>
            <div className="social-media">
                <a href="https://www.facebook.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook" /></a>
                <a href="https://twitter.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoyqJvgeXs4JEzmLWhor_TAC99-f9dAXERAA&s" alt="Twitter" /></a>
                <a href="https://www.instagram.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" /></a>
            </div>
            <div className="contact">            
                <p>Contact us at <a href="gouransh29@gmail.com">Gmail</a> for any queries</p>
            </div>
        </footer>
    </div>

    </>
    );
}

import React from 'react';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return(
    <div className='navbar'>
        <input type="checkbox" id="check"/>
            <header>
                <h2 className="logo">Furever <i className="fa-solid fa-paw"></i> Friends</h2>
            <div className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/adopt">Adopt</Link>
                    
                    <a href="#">Donate</a>
                    <a href="#">Our Team</a>
                </div>
                <label for="check">
                    <i className="fas fa-bars menu-btn"></i>
                    <i className="fas fa-times close-btn"></i>
                </label>
            </header>
    </div>
    );
}

export default Navbar;
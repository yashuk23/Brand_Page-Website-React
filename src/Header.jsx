import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <nav className="Header">
            <div className="logo">NIKE</div>
            <div className="nav-menu">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/explore" className="nav-item">Explore</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </div>
        </nav>
    );
}
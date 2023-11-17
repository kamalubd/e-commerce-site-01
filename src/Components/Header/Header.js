import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/Logo.svg'


const Header = () => {
    return (
        <div className='header-section'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='nav-div'>
            <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/collections'>Collections</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/login'>Login</Link>
            </nav>
            </div>
        </div>
    );
};

export default Header;
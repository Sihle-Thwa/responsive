import React from 'react';
import './Navbar.css'

const Navbar = () => {

    return (
        <>
            <nav className='navbar'>
                <div className='company-logo'>
                    RYC
                </div>
                <ul className='nav-items'>
                    <li className='nav-item'> <a href='#'> HOME</a></li>
                    <li className='nav-item'> <a href='#'>PRODUCTS</a></li>
                    <li className='nav-item'> <a href='#'>SERVICES</a></li>
                    <li className='nav-item'> <a href='#'>ABOUT</a></li>

                </ul>
            </nav>

            <div className='menu-toggle' >
                <i className='bx bx-menu'></i>
                <i className='bx bx-x'></i>

            </div>
        </>
    )
}

export default Navbar
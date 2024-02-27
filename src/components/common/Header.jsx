import React from 'react';
import './Header.css';
import header_image from './cardealerfloor.jpg'

function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header-image'>
                    <img src={header_image} alt='cardealerfloor' />
                </div>
            </div>
            <div className='header-info'>
                <h1 className='header-heading'>RENT YOUR CAR</h1>
                <p className='header-slogan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
                <button className='header-contact-btn'>
                    Contact Us
                </button>
            </div>

        </div>
    )
}

export default Header
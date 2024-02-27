import React from 'react';
import './Products.css';
import service_1 from './service_1.jpg'
import service_2 from './service_2.jpg'
import service_3 from './service_3.jpg'

const Products = () => {
    return (
        <div className='services'>
            <div className='service-container'>
                <div className='service-image'>
                    <img src={service_1} alt='service_1' />
                </div>
                <div className='description'>
                    <h1>Premium Car Rental</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>

                </div>

                <button className='Service-Book-Btn'>
                    BOOK
                </button>
            </div>
            <div className='service-container'>
                <div className='service-image'>
                    <img src={service_2} alt='service_2' />
                </div>
                <div className='description'>
                    <h1>Monthly Car Hire</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>

                </div>

                <button className='Service-Book-Btn'>
                    BOOK
                </button>
            </div>
            <div className='service-container'>
                <div className='service-image'>
                    <img src={service_3} alt='service_3' />
                </div>
                <div className='description'>
                    <h1>Bakkie Hire</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>

                </div>

                <button className='Service-Book-Btn'>
                    BOOK
                </button>
            </div>
        </div>
    )
}

export default Products
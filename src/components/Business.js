import React from 'react';
import './Business.css';

let business = {
    imageSrc: '/images/brunch.jpg',
    name: 'HappyBrunch',
    address: 'Carrer de Casp, 84',
    city: 'Barcelona',
    district: "L'Eixample",
    zipcode: '08010',
    category: 'Brunch',
    rating: 4.3,
    reviewcount: 110
}

function Business() {
    return (
        <div className='business-card'>
            <img src={business.imageSrc} alt={business.name} />
            <div className='restInfo'>
                <h3>{business.name}</h3>
                <div className='info-container'>
                    <p className='left-side-info'>
                        {business.address}
                        <br />
                        {business.district}
                        <br />
                        {business.zipcode}, {business.city}
                    </p>
                    <p className='rigth-side-info'>
                        <div className='orange-bold-text'>
                        {business.category}
                        <br />
                        {business.rating} ⭐
                        </div>
                        {business.reviewcount} reviews
                    </p>
                </div>
            </div>
        </div>
    )
}

function BusinessList() {
    const businessItems = Array.from({length: 16}).map((_, index) => (
        <li className='businessItem' key={index}>
            <Business />
        </li>
    ));
    
    return <ul id="businessList">{businessItems}</ul>
}

export default BusinessList;
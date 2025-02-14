import React from 'react';
import './Business.css';


function Business({ business }) {
    return (
        <div className='businessItem'>
            <img src={business.imageSrc} alt={business.name} />
            <div className='restInfo'>
                <h3>{business.name}</h3>
                <div className='info-container'>
                    <p className='left-side-info'>
                        {business.address}
                        <br/>
                        {business.state}
                        <br/>
                        {business.zipCode}, {business.city}
                    </p>
                    <p className='right-side-info'>
                        <span className='orange-bold-text'>
                        {business.category}
                        <br/>
                        {business.rating} ⭐                      
                        </span>
                        <br/>
                        {business.reviewCount} reviews
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Business;
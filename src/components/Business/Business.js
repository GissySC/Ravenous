import React from 'react';
import './Business.css';


function Business({ business }) {
    return (
        <div className='businessItem'>
            <img src={business.image_url} alt={business.name} />
            <div className='restInfo'>
                <h3>{business.name}</h3>
                <div className='info-container'>
                    <p className='left-side-info'>
                        {business.location.address1}
                        <br/>
                        {business.location.zip_code}, {business.location.city}
                    </p>
                    <p className='right-side-info'>
                        <span className='orange-bold-text'>
                        {business.categories?.[0]?.title || ''} 
                        <br/>
                        {business.rating} ⭐                      
                        </span>
                        ({business.review_count})
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Business;
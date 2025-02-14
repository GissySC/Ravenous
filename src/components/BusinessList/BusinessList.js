import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

function BusinessList({ businesses }) {
    return ( <div className='business-list'>
        {businesses.map((business) => (
            <Business key={business.id} business={business} />
        ))}
    </div>
    
    );
}

export default BusinessList;
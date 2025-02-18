import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

function BusinessList(props) {
    return ( <div className='business-list'>
        {
            props.businesses.map(business =>
            <Business business={business} key={business.name} />)
        }
    </div>
    
    );
}

export default BusinessList;
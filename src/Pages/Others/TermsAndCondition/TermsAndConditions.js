import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>This is our Terms & Condition</h2>
            <h3>Please read carefully before agree!</h3>
            <p>Go back to: <Link to='/register' target="_blank"><span className='text-blue-600'>register</span></Link></p>
        </div>
    );
};

export default TermsAndConditions;
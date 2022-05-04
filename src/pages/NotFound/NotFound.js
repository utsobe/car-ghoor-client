import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-color text-center'>
            <div style={{ height: '100vh' }} className='text-white pt-5 w-100'>
                <h1 style={{ fontSize: '150px' }}>404</h1>
                <h1 style={{ fontSize: '50px' }}>OOPS!</h1>
                <h2>This page is not available!</h2>
                <Link className='btn btn-primary mt-3 fw-bold' to='/'>Go to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
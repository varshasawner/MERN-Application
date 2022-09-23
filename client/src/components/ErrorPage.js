import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <div className='errorPage'>
                <div className='errorPage-content'>
                    <h1 className='oops mb-5'>Oops!</h1>
                    <h4>404 - PAGE NOT FOUND</h4>
                    <p>The Page You Are Looking For Might Be Removed Or Unavailable</p>

                    <button className='btn btn-primary text-white'><Link to="/" className='nav-link text-white'>Back To Home</Link></button>
                </div>
            </div>
        </>
    )
}

export default ErrorPage; 
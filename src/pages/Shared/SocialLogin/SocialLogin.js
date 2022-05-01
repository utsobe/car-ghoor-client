import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social-login/google.svg';
import facebook from '../../../images/social-login/facebook.svg';
import github from '../../../images/social-login/github.svg';

const SocialLogin = () => {
    return (
        <div className='px-5 mb-4'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
            </div>
            <p className='text-center text-primary mt-2'>Social Login</p>
            <div className='d-flex justify-content-center'>
                <button className='btn'><img width='38px' src={google} /></button>
                <button className='btn'><img width='40px' className='icon' src={facebook} /></button>
                <button className='btn'><img width='40px' src={github} /></button>
            </div>
        </div>
    );
};

export default SocialLogin;
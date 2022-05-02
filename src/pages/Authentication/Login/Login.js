import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
    }
    return (
        <div className='bg-color d-flex justify-content-center py-5'>
            <div className="center mx-3">
                <h2 className='fw-bold text-primary'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="email" name='email' required />
                            <span></span>
                            <label>Email</label>
                        </div>
                    </div>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="password" name='password' required />
                            <span></span>
                            <label>Password</label>
                        </div>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    <input className='btn btn-primary w-100 fs-5' type="submit" value="Login" />
                </form>
                <p className='navigate'>Not a Member? <Link className='navigate-link' to='/register'>Register</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
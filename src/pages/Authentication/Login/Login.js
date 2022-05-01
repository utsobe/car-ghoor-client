import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='bg-color d-flex justify-content-center py-5'>
            <div className="center mx-3">
                <h2 className='fw-bold text-primary'>Login</h2>
                <form method="post">
                    <div className="txt_field">
                        <input type="email" name='email' required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" name='password' required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    <input className='btn btn-primary w-100 fs-5' type="submit" value="Login" />
                </form>
                <p className='navigate'>Not a Member? <Link className='navigate-link' to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
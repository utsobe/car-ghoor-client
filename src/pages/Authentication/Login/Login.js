import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='bg-color d-flex justify-content-center py-5'>
            <div className="center mx-3">
                <h2 className='fw-bold'>Login</h2>
                <form method="post">
                    <div className="txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    <input className='btn btn-primary w-100 fs-5' type="submit" value="Login" />
                    <div className="signup_link">
                        Not a member? <a href="#">Signup</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
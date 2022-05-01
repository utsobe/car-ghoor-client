import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-color d-flex justify-content-center py-5'>
            <div className="center mx-3">
                <h2 className='fw-bold text-primary'>Register</h2>
                <form method="post">
                    <div className="txt_field">
                        <input type="text" name='name' required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className="txt_field">
                        <input type="email" name='email' required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" name='password' required />
                        <span></span>
                        <label>Create Password</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" name='confirmPassword' required />
                        <span></span>
                        <label>Confirm Password</label>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    <input className='btn btn-primary w-100 fs-5' type="submit" value="Register" />
                </form>
                <p className='navigate'>Already Have Account? <Link className='navigate-link' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
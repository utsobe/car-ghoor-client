import axios from 'axios';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (user) {
        // navigate(from, { replace: true });
    }

    if (error) {
        if (error.message.includes('auth/wrong-password')) {
            toast.error('Incorrect Email or Password', {
                toastId: "customId",
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if (error.message.includes('auth/user-not-found')) {
            toast.error('User not registered', {
                toastId: "customId",
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error(error.message, {
                toastId: "customId",
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    const handleLogin = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (email && password) {
            await signInWithEmailAndPassword(email, password);
            const { data } = await axios.post('https://sleepy-escarpment-95192.herokuapp.com/login', { email });
            localStorage.setItem('accessToken', data.accessToken);
            navigate(from, { replace: true });
        }
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Reset password email sent', {
                toastId: "customId",
                position: toast.POSITION.TOP_CENTER
            })
        }
        else {
            toast.error('Please enter your email', {
                toastId: "customId",
                position: toast.POSITION.TOP_CENTER
            })
        }
    }
    return (
        <div className='bg-color d-flex justify-content-center py-5'>
            <div className="center mx-3">
                <h2 className='fw-bold text-primary'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="email" name='email' ref={emailRef} required />
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
                    <div onClick={handleResetPassword} className="pass reset">Forgot Password?</div>
                    <input className='btn btn-primary w-100 fs-5' type="submit" value="Login" />
                </form>
                <p className='navigate'>Not a Member? <Link className='navigate-link' to='/register'>Register</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
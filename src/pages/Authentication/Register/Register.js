import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Register.css';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [createPassword, setCreatePassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);

    const handleName = nameInput => {
        if (nameInput === '') {
            setName({ value: '', error: 'Username is required*' });
        } else {
            setName({ value: nameInput, error: '' });
        }
    }

    const handleEmail = emailInput => {
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: '' });
        } else if (emailInput === '') {
            setEmail({ value: '', error: 'Email is required*' });
        } else {
            setEmail({ value: '', error: 'Invalid email' });
        }
    };

    const handleCreatePassword = createPasswordInput => {
        if (createPasswordInput.length > 7) {
            setCreatePassword({ value: createPasswordInput, error: '' });
        } else if (createPasswordInput === '') {
            setCreatePassword({ value: '', error: 'Create password is required*' });
        } else {
            setCreatePassword({ value: '', error: 'Password too short' });
        }
    };

    const handleConfirmPassword = confirmPasswordInput => {
        if (confirmPasswordInput.length > 7) {
            setConfirmPassword({ value: confirmPasswordInput, error: '' });
        } else if (confirmPasswordInput === '') {
            setConfirmPassword({ value: '', error: 'Confirm password is required*' });
        } else {
            setConfirmPassword({ value: '', error: "Didn't match" });
        }
    };

    const handleRegister = async event => {
        event.preventDefault();

        if (createPassword.value !== confirmPassword.value) {
            setConfirmPassword({ value: '', error: "Confirm password didn't match" })
        }
        else {
            if (name.value && email.value && createPassword.value && confirmPassword.value) {
                await createUserWithEmailAndPassword(auth, email.value, createPassword.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        toast.success('User registered successfully', {
                            toastId: "customId",
                            position: toast.POSITION.TOP_CENTER
                        });
                        toast.success('Email verification sent', {
                            toastId: "customId2",
                            position: toast.POSITION.TOP_CENTER
                        });
                        navigate('/');
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        if (errorMessage.includes('auth/email-already-in-use')) {
                            toast.error('Already registered', {
                                toastId: "customId",
                                position: toast.POSITION.TOP_CENTER
                            });
                        }
                        else {
                            toast.error(errorMessage, {
                                toastId: "customId",
                                position: toast.POSITION.TOP_CENTER
                            });
                        }
                    });
                await updateProfile({ displayName: name.value });
                await sendEmailVerification();
            }
        }
    }

    return (
        <div className='bg-color d-flex justify-content-center py-5'>
            <div className="center mx-3">
                <h2 className='fw-bold text-primary'>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="text" name='name' onBlur={event => handleName(event.target.value)} required />
                            <span></span>
                            <label>Username</label>
                        </div>
                        {
                            name?.error && <p className='text-danger error my-0'><small>{name.error}</small></p>
                        }
                    </div>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="email" name='email' onBlur={event => handleEmail(event.target.value)} required />
                            <span></span>
                            <label>Email</label>
                        </div>
                        {
                            email?.error && <p className='text-danger error my-0'><small>{email.error}</small></p>
                        }
                    </div>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="password" name='password' onBlur={event => handleCreatePassword(event.target.value)} required />
                            <span></span>
                            <label>Create Password</label>
                        </div>
                        {
                            createPassword?.error && <p className='text-danger error my-0'><small>{createPassword.error}</small></p>
                        }
                    </div>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="password" name='confirmPassword' onBlur={event => handleConfirmPassword(event.target.value)} required />
                            <span></span>
                            <label>Confirm Password</label>
                        </div>
                        {
                            confirmPassword?.error && <p className='text-danger error my-0'><small>{confirmPassword.error}</small></p>
                        }
                    </div>
                    <Form.Group className="pass" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} className={!agree ? 'text-danger' : ''} type="checkbox" label="Agreed to terms and condition" />
                    </Form.Group>
                    <input disabled={!agree} className='btn btn-primary w-100 fs-5' type="submit" value="Register" />
                </form>
                <p className='navigate'>Already Have Account? <Link className='navigate-link' to='/login'>Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;
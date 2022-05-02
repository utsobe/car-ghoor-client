import React from 'react';
import google from '../../../images/social-login/google.svg';
import facebook from '../../../images/social-login/facebook.svg';
import github from '../../../images/social-login/github.svg';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);

    if (loading || loading2 || loading3) {
        return <Loading></Loading>;
    }

    if (user || user2 || user3) {
        navigate(from, { replace: true });
    }

    return (
        <div className='px-5 mb-4'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
            </div>
            <p className='text-center text-primary mt-2'>Social Login</p>
            <div className='d-flex justify-content-center'>
                <button className='btn' onClick={() => signInWithGoogle()}>
                    <img width='38px' src={google} />
                </button>
                <button className='btn' onClick={() => signInWithFacebook()}>
                    <img width='40px' src={facebook} />
                </button>
                <button className='btn' onClick={() => signInWithGithub()}>
                    <img width='40px' src={github} />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
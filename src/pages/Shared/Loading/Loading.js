import React from 'react';
import { BallTriangle } from 'react-loader-spinner'


const Loading = () => {
    return (
        <div style={{ height: '470px' }} className='w-100 bg-color d-flex justify-content-center align-items-center'>
            <BallTriangle color='#0d6efd' height={100} width={100} />
        </div>
    );
};

export default Loading;
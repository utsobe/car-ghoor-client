import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Current Item is: {id}</h2>
        </div>
    );
};

export default UpdateItem;
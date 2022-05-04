import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyInventories = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/car?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleUpdate = id => {
        navigate(`/inventory/${id}`);
    };

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/car/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                    toast.success('Deleted successfully', {
                        toastId: "customId",
                        position: toast.POSITION.TOP_CENTER
                    })
                })
        }
    }
    return (
        <div className='bg-color py-5'>
            <div className="container">
                <div className='mb-5 d-flex justify-content-end'>
                    <Link to='/add' className='btn btn-primary'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add New Item</Link>
                </div>
                <div>
                    {
                        items.map(item => <div key={item._id}>
                            <div className="card mb-4 mx-auto border-0" style={{ maxWidth: "700px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.image} className="img-fluid rounded-start h-100" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name} <span className='fs-6'>-{item.supplier}</span></h5>
                                            <p className="card-text">${item.price} | Stock Id: {item._id}</p>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h4 className="">Available: {item.quantity}</h4>
                                                <div>
                                                    <button onClick={() => handleUpdate(item._id)} className='btn btn-primary'>Update</button>
                                                    <button onClick={() => handleDelete(item._id)} className='btn btn-danger ms-2'>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyInventories;
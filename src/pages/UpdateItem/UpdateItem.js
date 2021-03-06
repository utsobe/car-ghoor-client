import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [data, setData] = useState('');
    // const [restock, setRestock] = useState(0);

    useEffect(() => {
        const url = `https://sleepy-escarpment-95192.herokuapp.com/car/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    const { _id, name, image, description, supplier, price } = item;

    const handleReduce = () => {
        const quantity = item.quantity - 1;
        const sold = item.sold + 1;
        console.log(quantity, sold);
        const car = { quantity, sold };

        // const [updated] = useUpdate(id, car);

        const url = `https://sleepy-escarpment-95192.herokuapp.com/car/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success('Successfully Delivered', {
                    toastId: "customId",
                    position: toast.POSITION.TOP_CENTER
                })
                if (data.modifiedCount > 0) {
                    setData(quantity);
                }
            });
    }

    const handleRestock = event => {
        event.preventDefault();
        const number = parseInt(event.target.number.value);
        const quantity = item.quantity + number;
        const sold = item.sold;
        console.log(quantity, sold);
        const car = { quantity, sold };

        const url = `https://sleepy-escarpment-95192.herokuapp.com/car/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success('Item restock successfully', {
                    toastId: "customId",
                    position: toast.POSITION.TOP_CENTER
                })
                event.target.reset();
                // if (data.modifiedCount > 0) {
                //     setData(quantity);
                // }
            });
    }


    return (
        <div className="bg-color">
            <div className='container py-5'>
                <div className="row g-4">
                    <div className="col-sm-1 col-md-7">
                        <img src={image} width='100%' height='100%' className='rounded-3 shadow shadow-lg' alt="" />
                    </div>
                    <div className='col-sm-1 col-md-5 card-group'>
                        <div className="shadow shadow-lg rounded-3 p-4 bg-white">
                            <p><small>Stock Id: {_id}</small></p>
                            <h3>Name: {name}</h3>
                            <h5>Supplier: {supplier}</h5>
                            <p className='mt-3'>{description}</p>
                            <h5>Price: ${price}</h5>
                            <p>Sold: {item.sold} unit</p>
                            <h5>Available: <b className='fs-4'>{data ? data : item.quantity} unit</b><button onClick={handleReduce} className='btn btn-primary ms-3'>Delivered</button></h5>
                            <form onSubmit={handleRestock}>
                                <InputGroup className="my-3 d-flex align-items-center">
                                    <label>Restock the item:</label>
                                    <FormControl
                                        type='number'
                                        name='number'
                                        placeholder="Quantity"
                                        className='ms-3'
                                        required
                                    />
                                    <Button type='submit' variant="primary">
                                        Add
                                    </Button>
                                </InputGroup>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='my-5 d-flex justify-content-end'>
                    <Link to='/inventories' className='btn btn-primary'>Manage Inventories <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;
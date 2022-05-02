import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    const { name, image, description, quantity, supplier, price } = item;


    return (
        <div className="bg-color">
            <div className='container py-5'>
                <div className="row g-4">
                    <div className="col-sm-1 col-md-7">
                        <img src={image} width='100%' className='rounded-3 shadow shadow-lg' alt="" />
                    </div>
                    <div className='col-sm-1 col-md-5 card-group'>
                        <div className="shadow shadow-lg rounded-3 p-4 bg-white">
                            <p><small>Stock Id: {item.id}</small></p>
                            <h3>Name: {name}</h3>
                            <h5>Supplier: {supplier}</h5>
                            <p className='mt-3'>{description}</p>
                            <h5>Price: ${price}</h5>
                            <p>Sold: 55 unit</p>
                            <h5>Available: <b className='fs-4'>{quantity} unit</b><button className='btn btn-primary ms-3'>Delivered</button></h5>
                            <InputGroup className="my-3 d-flex align-items-center">
                                <label>Restock the item:</label>
                                <FormControl
                                    type='number'
                                    placeholder="Quantity"
                                    className='ms-3'
                                />
                                <Button variant="primary">
                                    Add
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;
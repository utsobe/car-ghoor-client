import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Items = ({ item }) => {
    const { _id, name, image, price, description, supplier, quantity } = item;

    const navigate = useNavigate();

    const handleUpdateItem = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className="card-group">
            <Card className='border-0 shadow'>
                <Card.Img variant="top" height='100%' src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='mb-1'><small>Supplier- <span className='fw-bold'>{supplier}</span></small></Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text className='fw-bold fs-5'>${price}</Card.Text>
                    <div className='d-flex
                    align-items-center justify-content-between'>
                        <h6>Available Quantity: {quantity}</h6>
                        <Button onClick={() => handleUpdateItem(_id)} variant="primary">Update</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Items;
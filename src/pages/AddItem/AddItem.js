import React from 'react';
import { toast } from 'react-toastify';

const AddItem = () => {
    const handleAddInventory = event => {
        event.preventDefault();
        const image = event.target.image.value;
        const name = event.target.name.value;
        const supplier = event.target.supplier.value.toUpperCase();
        const description = event.target.description.value;
        const price = parseInt(event.target.price.value);
        const sold = parseInt(event.target.sold.value);
        const quantity = parseInt(event.target.quantity.value);

        const car = { image, name, supplier, description, price, sold, quantity };
        console.log(car);

        const url = 'http://localhost:5000/car';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Item restock successfully', {
                    toastId: "customId",
                    position: toast.POSITION.TOP_CENTER
                })
                event.target.reset();
            })
    }
    return (
        <div className='bg-color d-flex justify-content-center py-5'>
            <div className="center mx-3 pb-5">
                <h2 className='fw-bold text-primary'>Add New Item</h2>
                <form onSubmit={handleAddInventory}>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="text" name='image' required />
                            <span></span>
                            <label>Image Link</label>
                        </div>
                    </div>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="text" name='name' required />
                            <span></span>
                            <label>Model Name</label>
                        </div>
                    </div>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="text" name='supplier' required />
                            <span></span>
                            <label>Supplier Company</label>
                        </div>
                    </div>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="text" name='description' required />
                            <span></span>
                            <label>Short Description</label>
                        </div>
                    </div>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="number" name='price' required />
                            <span></span>
                            <label>Price</label>
                        </div>
                    </div>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="number" name='sold' required />
                            <span></span>
                            <label>Total Sold/unit</label>
                        </div>
                    </div>
                    <div className='txt_field_mb'>
                        <div className="txt_field">
                            <input type="number" name='quantity' required />
                            <span></span>
                            <label>Available/unit</label>
                        </div>
                    </div>
                    <input className='btn btn-primary w-100 fs-5' type="submit" value="Add Inventory" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;
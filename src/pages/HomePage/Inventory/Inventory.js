import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import './Inventory.css';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='bg-color py-5'>
            <div className="container">
                <h2 className='fw-bold text-center text-white pb-5'>Our Inventory</h2>
                <div className="row row-cols-md-3 g-5">
                    {
                        items.map(item => <Items key={item.id} item={item}></Items>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;
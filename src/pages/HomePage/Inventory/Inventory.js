import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Items from '../Items/Items';
import './Inventory.css';

const Inventory = () => {
    const [items] = useItems();
    return (
        <div id='inventory' className='bg-color py-5'>
            <div className="container">
                <h2 className='fw-bold text-center text-white pb-5'>Our Inventory</h2>
                <div className="row row-cols-md-3 g-5">
                    {
                        items.slice(0, 6).map(item => <Items key={item._id} item={item}></Items>)
                    }
                </div>
                <div className='my-5 d-flex justify-content-end'>
                    <Link to='/inventories' className='btn btn-primary'>Manage Inventories <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
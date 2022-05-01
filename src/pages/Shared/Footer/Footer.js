import React, { useEffect, useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <footer className='bg-color text-light pt-5 '>
            <div className='container'>
                <div className="row">
                    <div className="col pt-4">
                        <h6 className='fw-bold'>OUR BRANDS</h6>
                        <ol className='lists'>
                            <li>Audi Autos</li>
                            <li>Honda Autos</li>
                            <li>Mercedes</li>
                            <li>Huyndai</li>
                            <li>Bently</li>
                            <li>All Vehicles</li>
                        </ol>
                    </div>
                    <div className="col pt-4">
                        <h6 className='fw-bold'>OWNERSHIP</h6>
                        <ol className='lists'>
                            <li>Dealer Locator</li>
                            <li>Service Locator</li>
                            <li>Pre-owned</li>
                            <li>Inventory</li>
                        </ol>
                    </div>
                    <div className="col pt-4">
                        <h6 className='fw-bold'>INFORMATION</h6>
                        <ol className='lists'>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>FAQ?</li>
                            <li>News</li>
                            <li>Site Map</li>
                            <li>{item.length}</li>
                        </ol>
                    </div>
                    <div className="col pt-4">
                        <h6 className='fw-bold'>SOCIAL NETWORKS</h6>
                        <ol className='lists'>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#">Github</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faSignOut} /></a></li>
                        </ol>
                    </div>
                    <hr className='mt-4' />
                    <p className='text-center text-secondary'><small>Copyright &copy; {year} All Right Reserved to Utsobe 俊哲</small></p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
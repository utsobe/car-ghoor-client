import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../../images/slider-images/image-5.png';
import slider2 from '../../../../images/slider-images/image-2.png';
import slider3 from '../../../../images/slider-images/image-3.png';
import slider4 from '../../../../images/slider-images/image-4.png';

const Banner = () => {
    return (
        <div>
            <Carousel className='bg-slider mt-'>
                <Carousel.Item className='py-5 bg-slider'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-1 text-white d-flex align-items-center">
                                <div>
                                    <h1 className='fw-bold'><span className='text-danger'>CARS INVENTORY</span> WEB APPLICATION</h1>
                                    <p className='py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae obcaecati consectetur deleniti enim provident. Est animi repellendus similique. Dicta illum voluptatum</p>
                                    <button className='btn btn-primary'>Check Now</button>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-1 text-white d-flex align-items-center justify-content-center p-3 mt-4">
                                <img width='100%' height='100%' src={slider1} alt="" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='py-5 bg-slider'>
                    <div className="container">
                        <div className="row row-cols-sm-1 row-cols-md-2">
                            <div className="cols text-white d-flex align-items-center">
                                <div>
                                    <h1 className='fw-bold'>BEST <span className='text-danger'>CARS INVENTORY</span> WEB APPLICATION</h1>
                                    <p className='py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae obcaecati consectetur deleniti enim provident. Est animi repellendus similique. Dicta illum voluptatum</p>
                                    <button className='btn btn-primary'>Check Now</button>
                                </div>
                            </div>
                            <div className="cols text-white d-flex align-items-center justify-content-center p-3">
                                <img width='100%' height='100%' src={slider2} alt="" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='py-5'>
                    <div className="container">
                        <div className="row row-cols-sm-1 row-cols-md-2">
                            <div className="cols text-white d-flex align-items-center">
                                <div>
                                    <h1 className='fw-bold'>BEST <span className='text-danger'>CARS INVENTORY</span> WEB APPLICATION</h1>
                                    <p className='py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae obcaecati consectetur deleniti enim provident. Est animi repellendus similique. Dicta illum voluptatum</p>
                                    <button className='btn btn-primary'>Check Now</button>
                                </div>
                            </div>
                            <div className="cols text-white d-flex align-items-center justify-content-center p-3">
                                <img width='100%' height='100%' src={slider3} alt="" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
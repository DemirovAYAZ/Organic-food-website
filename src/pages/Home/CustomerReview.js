import React from 'react'
import '../Home.css'
import { FaStar,FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CustomerReview = () => {
    return (
        <div className='container-color review-bg'>
            <div className='container'>
                <div className='section'>
                    <div className='review-container'>
                        <div className='review-items-header'>
                            <h2>Customers Reviews</h2>
                        </div>
                        <div className='review-items-header-img'>
                            <img src="/img/leaf.png" alt="leaf" />
                        </div>
                        <div className='review-items'>
                            <div className='review-item'>
                                <div className='review-stars'>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                </div>
                                <div className='review-text'>
                                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                                <div className='review-profile'>
                                    <div>
                                        <img src="/img/review-1.png" alt="review-1" />
                                    </div>
                                    <div>
                                        <h4>Mila Kunis</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='review-item review-item-bg'>
                                <div className='review-item-main-h2'>
                                    <h2>Deal Of The Day 15% Off On All Vegetables!</h2>
                                </div>
                                <div className='review-text-main'>
                                    <p>I am text block. Click edit button to change this tex em ips.</p>
                                </div>
                                <div className='review-button'>
                                    <Link to="/shop" ><button>SHOP NOW<FaArrowRight /></button></Link>
                                </div>
                            </div>
                            <div className='review-item'>
                                <div className='review-stars'>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                </div>
                                <div className='review-text'>
                                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                                <div className='review-profile'>
                                    <div>
                                        <img src="/img/review-2.png" alt="review-2" />
                                    </div>
                                    <div>
                                        <h4>Mike Sendler</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview

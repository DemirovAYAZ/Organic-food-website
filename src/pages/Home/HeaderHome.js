import React from 'react'
import '../Home.css'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"
const HeaderHome = () => {
    return (
        <div className='container-color home-bg'>
            <div className='container'>
                <div className='section'>
                    <div className='header-home-img '>
                        <img src="/img/home-header.png" alt="home-header" />
                    </div>
                    <div className='header-home-info'>
                        <div className='header-home-info-img'>
                            <img src="/img/leaf.png" alt="leaf" />
                        </div>
                        <div className='header-home-info-h3'>
                            <h3>Best Quality Products</h3>
                        </div>
                        <div className='header-home-info-h2'>
                            <h2>Join The Organic Movement!</h2>
                        </div>
                        <div className='header-home-info-p'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className='header-home-info-button'>
                            <Link to="/shop">
                                <button><span><FaShoppingCart /></span>Shop now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderHome

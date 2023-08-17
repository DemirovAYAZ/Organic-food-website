import React from 'react'
import '../About.css'
import { FaRegCheckCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CertifiedProducts = () => {
    return (
        <div className='container-color home-bg'>
            <div className='certified-container'>
                <div className='certified-container-inner'>
                    <div className='certified-elementor'>
                        <div className='certified-elementor-img'>
                            <img src="/img/certified.png" alt="certified" />
                        </div>
                        <div className='certified-elementor-info'>
                            <h4>Certified Products</h4>
                            <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className='certified-header'>
                        <h2>We Deal With Various Quality Organic Products!</h2>
                    </div>
                    <div>
                        <img src="/img/leaf.png" alt="leaf" />
                    </div>
                    <div className='certified-quality'>
                        <h3><span><FaRegCheckCircle /></span>Fresh fruits</h3>
                        <h3><span><FaRegCheckCircle /></span>Beauty products</h3>
                        <h3><span><FaRegCheckCircle /></span>Dry fruits</h3>
                        <h3><span><FaRegCheckCircle /></span>Milk products</h3>
                        <h3><span><FaRegCheckCircle /></span>Fresh vegetables</h3>
                        <h3><span><FaRegCheckCircle /></span>Organic honey</h3>
                        <h3><span><FaRegCheckCircle /></span>Dry vegetables</h3>
                        <h3><span><FaRegCheckCircle /></span>Organic tea</h3>
                    </div>
                    <div className='header-home-info-button'>
                        <Link to="/shop">
                            <button><span><FaShoppingCart /></span>Shop now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertifiedProducts

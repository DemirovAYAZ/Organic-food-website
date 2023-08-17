import React from 'react'
import { FaTruck, FaAddressBook, FaMoneyBillAlt, FaRecycle} from "react-icons/fa";

const HomeAdvantage = () => {
    return (
        <div className='advantage-bg'>
            <div className='container'>
                <div className='advantage-items'>
                    <div className='advantage-item'>
                        <div className='advantage-item-inner'>
                            <span><FaTruck /></span>
                            <div className='advantage-item-inner-text'>
                                <h2>Free Shipping</h2>
                                <h3>Above $5 Only</h3>
                            </div>
                        </div>
                    </div>
                    <div className='advantage-item'>
                        <div className='advantage-item-inner'>
                            <span><FaAddressBook /></span>
                            <div className='advantage-item-inner-text'>
                                <h2>Certified Organic</h2>
                                <h3>100% Guarantee</h3>
                            </div>
                        </div>
                    </div>
                    <div className='advantage-item'>
                        <div className='advantage-item-inner'>
                            <span><FaMoneyBillAlt /></span>
                            <div className='advantage-item-inner-text'>
                                <h2>Huge Savings</h2>
                                <h3>At Lowest Price</h3>
                            </div>
                        </div>
                    </div>
                    <div className='advantage-item'>
                        <div className='advantage-item-inner'>
                            <span><FaRecycle /></span>
                            <div className='advantage-item-inner-text'>
                                <h2>Easy Returns</h2>
                                <h3>No Questions Asked</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAdvantage

import React from 'react'
import '../Home.css'

const FeaturedBrands = () => {
  return (
    <div className='container'>
      <div className='section'>
        <div className='brands-container'>
            <div className='brands-header'>
                <h2>Featured Brands : </h2>
            </div>
            <div className='brands-images'>
                <img src="/img/brand-1.png" alt="brand-1" />
                <img src="/img/brand-2.png" alt="brand-2" />
                <img src="/img/brand-3.png" alt="brand-3" />
                <img src="/img/brand-4.svg" alt="brand-4" />
                <img src="/img/brand-5.png" alt="brand-5" />
                <img src="/img/brand-6.png" alt="brand-6" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBrands

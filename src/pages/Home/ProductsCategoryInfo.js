import React from 'react'
import '../Home.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
const ProductsCategoryInfo = () => {
  return (
    <div className='container'>
      <div className='products-type-info-container'>
          <div className='products-type-header-img'>
              <img src="/img/leaf-2.png" alt="leeaf-2" />
          </div>
          <div className='products-type-items'>
              <div className='product-type-item product-type-item-bg'>
                  <h2 className='product-type-item-h2'>Farm Fresh Fruits</h2>
                  <p className='product-type-item-p'>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
                  <Link to="/shop" className='product-type-item-button'><button>SHOP NOW<FaArrowRight /></button></Link>
              </div>
              <div className='product-type-item product-type-item-bg'>
                  <h2 className='product-type-item-h2'>Fresh Vegetables</h2>
                  <p className='product-type-item-p'>Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.</p>
                  <Link to="/shop" className='product-type-item-button'><button>SHOP NOW<FaArrowRight /></button></Link>
              </div>
              <div className='product-type-item product-type-item-bg'>
                  <h2 className='product-type-item-h2'>Organic Legume</h2>
                  <p className='product-type-item-p'>Phasellus sed urna mattis, viverra libero sed, aliquam est.</p>
                  <Link to="/shop" className='product-type-item-button'><button>SHOP NOW<FaArrowRight /></button></Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProductsCategoryInfo

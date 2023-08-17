import React from 'react'
import HeaderHome from './Home/HeaderHome'
import './Home.css'
import HomeAdvantage from './Home/HomeAdvantage'
import ProductsCategoryInfo from './Home/ProductsCategoryInfo'
import CustomerReview from './Home/CustomerReview'
import FeaturedBrands from './Home/FeaturedBrands'

const Home = () => {
  return (
    <div>
        <HeaderHome />
        <HomeAdvantage />
        <ProductsCategoryInfo />
        <CustomerReview />
        <FeaturedBrands/>
    </div>
  )
}

export default Home

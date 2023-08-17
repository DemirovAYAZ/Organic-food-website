import React from 'react'
import HeaderAbout from './About/HeaderAbout'
import './About.css'
import StatisticAbout from './About/StatisticAbout'
import CertifiedProducts from './About/CertifiedProducts'

const About = () => {
  return (
    <div>
      <div className='container-color'>
        <div className='section'>
          <h1 className='about-header'>About Us</h1>
        </div>
      </div>
      <HeaderAbout/>
      <StatisticAbout />
      <CertifiedProducts />
    </div>
  )
}

export default About

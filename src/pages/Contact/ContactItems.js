import React from 'react'
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import '../Contact.css'


const ContactItems = () => {
    return (
        <div className='container'>
          <div className='contact-img'>
            <img src="/img/leaf-2.png" alt="leaf-2" />
          </div>
          <div className='section'>
            <div className='contact-info-item-container'>
                <div className='contact-info-item'>
                    <div className='contact-info-item-icon'>
                        <FaPhone/>
                    </div>
                    <div className='contact-info-item-text'>
                        <h4>+123 456 7890</h4>
                        <h4>+123 456 7890</h4>
                    </div>
                </div>
                <div className='contact-info-item'>
                    <div className='contact-info-item-icon'>
                        <LuMail/>
                    </div>
                    <div className='contact-info-item-text'>
                        <h4>info@example.com</h4>
                        <h4>support@example.com</h4>
                    </div>
                </div>
                <div className='contact-info-item'>
                    <div className='contact-info-item-icon'>
                        <FaLocationDot/>
                    </div>
                    <div className='contact-info-item-text'>
                        <h4>1569 Ave, New York,</h4>
                        <h4>NY 10028, USA</h4>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default ContactItems
 
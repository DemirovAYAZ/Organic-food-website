import React from 'react'
import ContactItems from './Contact/ContactItems'
import FrequentlyQuestions from './Contact/FrequentlyQuestions'

const Contact = () => {
  return (
    <div>
      <div className='container-color'>
        <div className='section'>
          <h1 className='contact-header'>Get in Touch</h1>
        </div>
      </div>
      <ContactItems />
      <FrequentlyQuestions />
    </div>
  )
}

export default Contact

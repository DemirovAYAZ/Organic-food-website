import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
    return (
        <div className='container'>
            <div className='section'>
                <div className='error-container'>
                    <img src="/img/error-sad-face.png" alt="sad-face" className='sad-face' />
                    <h1>Error 404</h1>
                    <h4>Page Not Found</h4>
                    <h2>Back to <Link to="/" className="error-link">Home</Link> page</h2>
                </div>
            </div>
        </div>
    )
}

export default Error

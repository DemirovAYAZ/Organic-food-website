import "./Footer.css"
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {Link} from "react-router-dom"

const Footer = () => {

  return (
    <footer>
      <div className='container'>
        <div className='footer-part-1 col center'>
          <div className='w-50 column center'>
            <Link to="/" className="nav-branding">
              <img src="/img/organic-shop-logo.png" alt="logo" className='footer-img' />
            </Link>
            <p className='footer-p'>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>
          </div>
          <div className='w-50 col'>
            <div className='w-50 column center'>
              <h2 className='footer-h2'>Quick Links</h2>
              <div className='footer-h4-list'>
                <Link to="/home"><h4 className='footer-h4'>HOME</h4></Link>
                <Link to="/basket"><h4 className='footer-h4'>CART</h4></Link>
                <Link to="/contact"><h4 className='footer-h4'>CONTACT</h4></Link>
                <Link to="/shop"><h4 className='footer-h4'>SHOP</h4></Link>
              </div>
            </div>
            <div className='w-50 column center'>
              <h2 className='footer-h2'>Download Mobile App</h2>
              <p className='footer-p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='footer-part-1'>
            <div className='footer-part-2'>
              <p className='copyright'>Copyright © 2023 | <Link to='https://www.4digital.az/' target='_blank' className='digital-4'>4Digital</Link></p>
            </div>
            <div className='footer-part-2 footer-icons'>
              <FaInstagram className='footer-icon' />
              <FaFacebook className='footer-icon' />
              <FaWhatsapp className='footer-icon' />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

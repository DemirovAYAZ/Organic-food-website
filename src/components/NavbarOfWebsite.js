import React, { useEffect, useState, useRef } from 'react';
import './NavbarOfWebsite.css';
import { FaShoppingBasket } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTotals } from '../Slice/CartSlice';

const NavbarOfWebsite = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cartTotalQuantity, cartTotalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navbarRef = useRef(null);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <header>
      <nav ref={navbarRef} className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-branding">
          <img src='/img/organic-shop-logo.png' alt="logo" className='logo-img' />
        </Link>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink
              end
              to="/shop"
              className="nav-link"
              activeClassName="active-link"
              onClick={closeMenu}
            >
              EVERYTHING
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/shop/grocery"
              className="nav-link"
              activeClassName="active-link"
              onClick={closeMenu}
            >
              GROCERY
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/shop/juice"
              className="nav-link"
              activeClassName="active-link"
              onClick={closeMenu}
            >
              JUICE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active-link"
              onClick={closeMenu}
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick={closeMenu}
            >
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active-link"
              onClick={closeMenu}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
        <span className='price'>$ {cartTotalAmount}</span>
        <Link to="/basket" className='card'>
          <FaShoppingBasket className='shopping-basket' variant="primary" />
          <Badge bg="danger" className='badge'>{cartTotalQuantity}</Badge>
        </Link>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className='bar'></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default NavbarOfWebsite;

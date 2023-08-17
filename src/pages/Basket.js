import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './Basket.css'
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../Slice/CartSlice'
import { TiDeleteOutline } from "react-icons/ti";
import { FaArrowRight } from 'react-icons/fa'
const Basket = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
    dispatch(getTotals());
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
    dispatch(getTotals());
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
    dispatch(getTotals());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(getTotals());
  };
  return (
    <div className='container'>
      <div className='basket-section'>
        <div className='basket-header'>
          <h2>Your orders</h2>
        </div>
        {cart.cartItems.length === 0 ? (
          <div className='product-item-container'>
            <div className='empty-message'>
              <p>Your basket is empty</p>
              <Link to='/shop' className='start-shopping'>
                Start Shopping <FaArrowRight />
              </Link>
            </div>
          </div>

        ) : (
          <div className='product-item-container'>
            <div className='order-summary-info'>
              <h5 className='product-info-header'>Subtotal Price :</h5>
              <h3 className='product-info-h3'>{cart.cartTotalAmount} $</h3>
              <h5 className='product-info-header'>Sub Quantity Product :</h5>
              <h3 className='product-info-h3'>({ cart.cartTotalQuantity})</h3>
              <button className='product-order'>Order <FaArrowRight /></button>
              <button onClick={() => handleClearCart()} className='product-clear'>Clear Basket <FaArrowRight /></button>
              <Link to="/shop" className='continue-shopping'>Continue Shopping <FaArrowRight /></Link>
            </div>
            <div className='product-items'>
              {cart.cartItems.map((cartItem) => (
                <div className='product-item-inner' key={cartItem.id}>
                  <div className='product-item'>
                    <div className='product-img'>
                      <img src={cartItem.img} alt="cart-item" />
                    </div>
                    <div className='product-infos'>
                      <div className='product-info'>
                        <div className='product-name'>
                          <h5 className='product-info-header'>Product Name :</h5>
                          <h3 className='product-info-h3'>{cartItem.name}</h3>
                          <h5 className='product-info-header'>Product Category : </h5>
                          <h3 className='product-info-h3 product-category'>{cartItem.type}</h3>
                        </div>
                        <div className='product-price'>
                          <h5 className='product-info-header'>Product Price :</h5>
                          <h3 className='product-info-h3 product-category'>{cartItem.price} $</h3>
                          <div className='product-quantity'>
                            <button className='quantity-span' onClick={() => handleDecreaseCart(cartItem)}>-</button>
                            <h3>{cartItem.cartQuantity}</h3>
                            <button className='quantity-span' onClick={() => handleIncreaseCart(cartItem)}>+</button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className='total-price'>
                        <h4>Total Price : {cartItem.cartQuantity * cartItem.price} $</h4>
                      </div>
                    </div>
                  </div>
                  <div className='product-delete' onClick={() => handleRemoveFromCart(cartItem)}>
                    <TiDeleteOutline className='product-delete-icon' />
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        )}
      </div>
    </div>
  )
}

export default Basket

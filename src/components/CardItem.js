
import React from 'react';
import './CardItem.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Slice/CartSlice';
import { Link } from 'react-router-dom';
import CardInfo from './CardInfo';

const CardItem = ({item}) => {

  const dispatch = useDispatch()

  const handleAddToCart =(item) => {
    dispatch(addToCart(item))
  }

  return (
    <div className='card'>
      <div className='card-container'>
        <Link to={`/shop/${item.id}/${item.name}`} element={<CardInfo />} key={item.id}>
          <img src={item.img} alt='item' />
        </Link>
        <h5 className='card-h5'>{item.type}</h5>
        <h3 className='card-h3'>{item.name}</h3>
        <h4 className='card-h4'>$ {item.price}</h4>
        <button onClick={() => handleAddToCart(item)} className='add-button'>Add To Basket</button>
      </div>
    </div>
  );
};

export default CardItem;

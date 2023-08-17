import React from 'react';
import './CardInfo.css';
import CardItem from './CardItem';
import Data from '../Data/Data.json';

const RelatedProducts = ({ selectedCategory }) => {
  const relatedItems = Data.filter(item => item.type === selectedCategory);
  const shuffledRelatedItems = relatedItems.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <div className='related-products-container'>
      <div className='related-products-header'>
        <h2>Related Products</h2>
      </div>
      <div className='related-products'>
        {shuffledRelatedItems.map(item => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
import React from 'react';
import Everything from './Everything';

const Grocery = ({ data }) => {
  const groceryProducts = data.filter((product) => product.type === "Grocery");

  return (
    <div>
      <div className='page-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequatur voluptate, tempore est modi molestias nobis sit dolorum tenetur debitis optio blanditiis assumenda officiis expedita, aut quis fuga at inventore vitae, error quos excepturi. Quo architecto error corporis eaque iusto!</p>
      </div>
      <Everything data={groceryProducts} />
    </div>
  );
};

export default Grocery;

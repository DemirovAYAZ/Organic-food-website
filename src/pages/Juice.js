import React from 'react';
import Everything from './Everything';

const Juice = ({ data }) => {
  const juiceProducts = data.filter((product) => product.type === "Juice");

  return (
    <div>
      <div className='page-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus quo, fugiat veniam ab provident maiores dolorem id, incidunt earum velit libero accusamus placeat ipsam nulla. Laudantium voluptate ipsa quaerat atque quis a eveniet debitis alias laboriosam voluptatem, eaque ad obcaecati ratione, dolore natus. Saepe quasi officia libero cumque ratione.</p>
      </div>
      <Everything data={juiceProducts} />
    </div>
  );
};

export default Juice;

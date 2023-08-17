import React, { useState, useEffect } from 'react';
import '../About.css';

const StatisticAbout = () => {
  const [productCount, setProductCount] = useState(4960);
  const [curatedProductCount, setCuratedProductCount] = useState(760);
  const [categoryCount, setCategoryCount] = useState(0);

  const targetProductCount = 40;
  const targetCuratedProductCount = 40;
  const targetCategoryCount = 40
  const animationDuration = 1000;
  const steps = 10;

  useEffect(() => {
    const productStep = Math.ceil(targetProductCount / steps);
    const curatedProductStep = Math.ceil(targetCuratedProductCount / steps);
    const categoryStep = Math.ceil(targetCategoryCount / steps)


    let stepCounter = 0;
    const interval = setInterval(() => {
      if (stepCounter < steps) {
        stepCounter++;
        setProductCount((productCount) => productCount + productStep);
        setCuratedProductCount((curatedProductCount) => curatedProductCount + curatedProductStep);
        setCategoryCount((categoryCount) => categoryCount + categoryStep)
      } else {
        clearInterval(interval);
      }
    }, animationDuration / steps);

    return () => {
      clearInterval(interval);
    };
  }, [targetProductCount, targetCuratedProductCount]);

  return (
    <div className='advantage-bg'>
      <div className='container'>
        <div className='statistic-container'>
          <div className='statistic-header'>
            <h3>Numbers Speak For Themselves!</h3>
          </div>
          <div className='statistic-items'>
            <div className='statistic-item'>
              <h3 className='statistic-item-h3'>{productCount}+</h3>
              <h4 className='statistic-item-h4'>Products</h4>
            </div>
            <div className='statistic-item'>
              <h3 className='statistic-item-h3'>{curatedProductCount}+</h3>
              <h4 className='statistic-item-h4'>Curated Products</h4>
            </div>
            <div className='statistic-item'>
              <h3 className='statistic-item-h3'>{categoryCount}+</h3>
              <h4 className='statistic-item-h4'>Category</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticAbout;
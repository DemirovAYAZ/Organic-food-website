import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Everything from './Everything';
import Juice from './Juice';
import Grocery from './Grocery';

const Shop = ({ data }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(40);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default'); // State for sorting
  const [filteredData, setFilteredData] = useState(data);
  const location = useLocation();
  const activeLinkText =
    location.pathname === '/shop'
      ? 'Shop'
      : location.pathname === '/shop/grocery'
      ? 'Grocery'
      : location.pathname === '/shop/juice'
      ? 'Juice'
      : '';

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value === '') {
      setMinPrice(0);
    } else if (value <= maxPrice && value <= 40) {
      setMinPrice(value);
    } else {
      setMinPrice(Math.min(maxPrice, 40));
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value === '') {
      setMaxPrice(0);
      setMinPrice(0);
    } else if (value >= minPrice && value <= 40) {
      setMaxPrice(value);
    } else {
      setMaxPrice(Math.min(minPrice, 40));
    }
  };

  const handleSearchChange = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
  };

  useEffect(() => {
    const sortedData = [...data];

    if (sortOption === 'decrease') {
      sortedData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortOption === 'increase') {
      sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); 
    }

    setFilteredData(
      sortedData.filter(
        (product) =>
          parseFloat(product.price) >= minPrice &&
          parseFloat(product.price) <= maxPrice &&
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, minPrice, maxPrice, searchQuery, sortOption]);

  return (
    <div className="container-color">
      <div className="container">
        <div className="section">
          <div className="w-30">
            <div className="search-part">
              <input
                type="text"
                placeholder="Search products.."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="search-button">＞</button>
            </div>
            <div className='sorting-part'>
              <h2 className='sorting-h2'>Sort By Price</h2>
              <select
                className='sort-select'
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value='default'>Default</option>
                <option value='decrease'>Sort by price : higt to low</option>
                <option value='increase'>Sort by price : low to high</option>
              </select>
            </div>
            <div className='filter-part'>
              <h2 className='filter-h2'>Filter By Price</h2>
              <div className="slider">
                <div className="progress" style={{ left: `${(minPrice / 40) * 100}%`, right: `${100 - (maxPrice / 40) * 100}%` }}></div>
              </div>
              <div className="range-input">
                <input
                  type="range"
                  className="range-min"
                  min="0"
                  max="40"
                  value={minPrice}
                  step="1"
                  onChange={handleMinChange}
                />
                <input
                  type="range"
                  className="range-max"
                  min="0"
                  max="40"
                  value={maxPrice}
                  step="1"
                  onChange={handleMaxChange}
                />
              </div>
              <div className='range-number-inputs'>
                <input
                  type="text"
                  className="input-min" 
                  value={minPrice}
                  onChange={handleMinChange}
                />
                <input
                  type="text"
                  className="input-max"
                  value={maxPrice === 0 ? "" : maxPrice}
                  onChange={handleMaxChange}
                />
              </div>
            </div>
            <div className='product-group-div'>
              <p className='product-group-name'>Grocery <span>({filteredData.filter((product) => product.type === "Grocery").length})</span></p>
              <p className='product-group-name'>Juice <span>({filteredData.filter((product) => product.type === "Juice").length})</span></p>
            </div>
          </div>
          <div className="w-70">
            <div className='current-page'>
              <Link to="/home"><h4>Home</h4></Link>
              <span>/</span>
              <h4>{activeLinkText}</h4>
            </div>
            <div className='page-header'>
              <h2>{activeLinkText}</h2>
            </div>
            <Routes>
              <Route path="/" element={<Everything data={filteredData} />} />
              <Route path="/grocery" element={<Grocery data={filteredData} />} />
              <Route path="/juice" element={<Juice data={filteredData} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

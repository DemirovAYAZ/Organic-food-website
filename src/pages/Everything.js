import React, { useState, useEffect } from 'react';
import './Shop.css';
import CardItem from '../components/CardItem';

const items_per_page = 6;
const max_buttons = 3;

const Everything = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const totalItems = data.length;
    const lastPage = Math.ceil(totalItems / items_per_page);
    setLastPage(lastPage);
    if (currentPage > lastPage) {
      setCurrentPage(1);
    }
  }, [data, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastIndex = currentPage * items_per_page;
  const firstIndex = lastIndex - items_per_page;
  const currentItems = data.slice(firstIndex, lastIndex);

  let startPage;
  if (currentPage <= max_buttons) {
    startPage = 1;
  } else if (currentPage >= lastPage - max_buttons + 1) {
    startPage = lastPage - max_buttons + 1;
  } else {
    startPage = currentPage - Math.floor(max_buttons / 2);
  }

  const endPage = Math.min(lastPage, startPage + max_buttons - 1);

  return (
    <div className='height'>
      {data.length === 0 ? (
        <>
          <h2 className='no-items'>No Items</h2>
        </>
      ) : (
        <>
          <div className='row'>
            {currentItems.map((product, i) => (
              <CardItem
                item={product}
                key={i}
              />
            ))}
          </div>
          {lastPage >= 1 && (
            <div className='row'>
              <div className='pagination'>
                <button
                  className={currentPage === 1 ? 'active pagination-button disabled' : 'pagination-button'}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &lt; 
                </button>
                {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
                  <button
                    key={startPage + index}
                    className={currentPage === startPage + index ? 'active-button pagination-button' : 'pagination-button'}
                    onClick={() => handlePageChange(startPage + index)}
                  >
                    {startPage + index}
                  </button>
                ))}
                <button
                  className={currentPage === lastPage ? 'active pagination-button disabled' : 'pagination-button'}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === lastPage}
                >
                  &gt;
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Everything;

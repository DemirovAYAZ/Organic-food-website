import React from 'react'
import './CardInfo.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Slice/CartSlice';


const CardInfoPart = ({selectedItem}) => {
    const dispatch = useDispatch()

    const handleAddToCart =(selectedItem) => {
        dispatch(addToCart(selectedItem))
    }
    return (
        <div className='card-info-part-container'>
            <div className='card-info-part-img'>
                <img src={selectedItem.img} alt="item" />
            </div>
            <div className='card-info-part'>
                <div className='card-info-part-header'>
                    <h2>{selectedItem.name}</h2>
                </div>
                <div className='card-info-part-price'>
                    <h3>$ {selectedItem.price}</h3>
                </div>
                <div className='card-info-part-description'>
                    <p>{selectedItem.description}</p>
                </div>
                <div className='card-info-part-order'>
                    <button onClick={() => handleAddToCart(selectedItem)}>Add to basket</button>
                </div>
                <hr />
                <div className='card-info-part-category'>
                    <h3>Category : </h3>
                    <h3 className='category-name'>{selectedItem.type}</h3>
                </div>
            </div>
        </div>
    )
}

export default CardInfoPart

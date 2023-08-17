import React from 'react'
import { useParams } from 'react-router-dom';
import Data from '../Data/Data.json'
import CardInfoPart from './CardInfoPart';
import RelatedProducts from './RelatedProducts';
import './CardInfo.css'

const CardInfo = () => {
    const { id } = useParams();

    const itemId = parseInt(id);

    const selectedItem = Data.find((item) => item.id === itemId);
    return (
        <div className='container-color'>
            <div className='container'>
                <div className='card-info-section'>
                    <CardInfoPart selectedItem={selectedItem} />
                    <RelatedProducts selectedCategory={selectedItem.type} />
                </div>
            </div>
        </div>
    )
}

export default CardInfo

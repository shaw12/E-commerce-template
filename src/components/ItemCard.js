import React from 'react'

const ItemCard = ({data, onClick}) => {
    return (
        <div className="itemCard" onClick={onClick}>
            <img src={data.image} />
            <div className="dflex df-sbetween iemcard-title">
                <p>{data.title}</p>
                <p>${data.price}</p>
            </div>
            <p className="itemCard-description">{data.description}</p>
        </div>
    )
}

export default ItemCard

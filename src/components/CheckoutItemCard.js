import React from 'react'

const CheckoutItemCard = ({selectedItem}) => {
    return (
        <div>
            {
                selectedItem.map((card) => (
                    <>
                        <div className="checkout-card">
                            <div>
                                <p className="fbold f20">{card.title}</p>
                                <span>{card.description}</span>
                                <div className="dflex df-acenter fbold">
                                    <p className="f20">${card.price}</p>
                                    <p className="bluish-text">In Stock</p>    
                                </div>
                            </div>
                            <div className="checkout-img">
                                <img src={card.image} />
                            </div>
                            
                        </div>
                        <hr />
                    </>
                ))
            }
        </div>
    )
}

export default CheckoutItemCard

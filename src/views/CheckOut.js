import React, { useEffect, useState } from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Link, useHistory } from 'react-router-dom'
import CheckoutItemCard from '../components/CheckoutItemCard'
import Slider from "react-slick";
import CardDetail from '../components/cardDetails';
import AddCard from '../components/AddCard';
import Button from '../components/Button';

const CheckOut = ({selectedItem, cards, setCards}) => {
    
    const [price, setPrice] = useState(0)
    let history = useHistory()

    useEffect(() => {
        if(selectedItem) {
            let itemPrice = 0;
            selectedItem.map((val) => itemPrice = itemPrice + parseInt(val.price) )
            setPrice(itemPrice)
        }
    }, [])

    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        variableWidth: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        adaptiveHeight: true,
    };
  
    console.log(`object`, cards)

    return (
        <div className="checkout">
            <header className="padding-20">
                <HiOutlineArrowLeft onClick={() => history.goBack()} className="goback-icon" />
                <h1 className="fbold">Check out</h1>
            </header>

            <hr />

            <CheckoutItemCard selectedItem={selectedItem} />

            <AddCard cards={cards} setCards={setCards} />

            <div >
                {
                    cards.length ?
                        <Slider {...settings}>
                            {
                                cards.map((card) => <CardDetail card={card} />)
                            }
                        </Slider>
                        :
                        <h6 style={{textAlign: "center", marginTop: 45, height: 50}}>No cards found</h6>
                }
                
            </div>

            <div className="padding-20">

                <div className="d-flex df-acenter df-sbetween">
                    <p>Order</p>
                    <p>{price}$</p>
                </div>

                <div className="d-flex df-acenter df-sbetween">
                    <p>Delivery</p>
                    <p>7.2$</p>
                </div>

                <div className="d-flex df-acenter df-sbetween fbold" style={{fontSize: 18}}>
                    <p>Summary</p>
                    <p>{price + 7.2}$</p>
                </div>

                <Link to="/" className="pay-now">
                   { 
                        cards.length ? <Button title="Pay Now" /> : ""
                   }
                </Link>
            </div>
        </div>
    )
}

export default CheckOut

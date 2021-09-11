import React, { useEffect, useState } from 'react'
import './cardDetails.css'

import { SiVisa, SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard, FaCcDinersClub } from "react-icons/fa";

const CardDetail = ({card}) => {

    const [cardType, setCardType] = useState("")

    useEffect(() => {
        var re = new RegExp("^4");
        if (card.cardNumber.match(re) != null){
            setCardType("Visa")
            return;
        }
            
        if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(card.cardNumber)){
            setCardType("Mastercard")
            return;
        }
    
        // Discover
        re = new RegExp("^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$");
        if (card.cardNumber.match(re) != null){
            setCardType("American Express")
            return;
        }
    
        // Diners
        re = new RegExp("^36");
        if (card.cardNumber.match(re) != null){
            setCardType("Diners")
            return;
        }
    
    
        return "";
    }, [])
    
    return (
        <div>

            <div class="card">
                <div class="card__front card__part">
                    <div className="card__front-square card__square">
                        {
                            cardType === "Visa" || cardType === "" ? <SiVisa /> : cardType === "Mastercard" ? <FaCcMastercard /> : "Diners" ? <FaCcDinersClub /> : <SiAmericanexpress />
                        }
                    </div>
                    <img className="card__front-logo card__logo" />
                    <p className="card_numer">**** **** **** {card.cardNumber.substr(-4)}</p>
                    <div className="card__space-75">
                        <span className="card__label">Card holder</span>
                        <p className="card__info">{card.name}</p>
                    </div>
                    <div className="card__space-25">
                        <span className="card__label">Expires</span>
                        <p className="card__info">{card.expriyMonth}/{card.expiryYear}</p>
                    </div>
                </div>
            
                <div class="card__back card__part">
                    <div class="card__black-line"></div>
                    <div class="card__back-content">
                    <div class="card__secret">
                        <p class="card__secret--last">{card.cvv}</p>
                    </div>
                    {/* <img class="card__back-square card__square" src="https://image.ibb.co/cZeFjx/little_square.png" />
                    <img class="card__back-logo card__logo" src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png" /> */}
                    
                    </div>
                </div>
            
            </div>

        </div>
    )
}

export default CardDetail

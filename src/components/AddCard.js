import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const AddCard = ({cards, setCards}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setName("")
        setCardNumber("")
        setExpriyMonth("")
        setExpiryYear("")
        setCvv("")
        return
    };
    const handleShow = () => setShow(true);

    const [name, setName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [cvv, setCvv] = useState("")
    const [expriyMonth, setExpriyMonth] = useState("")
    const [expiryYear, setExpiryYear] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();

        let obj = {};

        if(!name){
            Object.assign(obj, {name: "Enter accountholder name"})
        }
        if(!cardNumber || cardNumber.length < 14){
            Object.assign(obj, {cardNumber: "Invalid Card"})
        }
        if((!expriyMonth || expriyMonth > 12) || (!expiryYear || expiryYear < 21)){
            Object.assign(obj, {expiryDate: "Invalid Date"})
        }
        if(cvv.length !== 3){
            Object.assign(obj, {cvv: "Invalid CVV"})
        }
        setError(obj)

        if(obj && Object.keys(obj).length === 0 ){
            setCards(cards.concat([{
                name,
                cardNumber,
                expriyMonth,
                expiryYear,
                cvv
            }]))
            handleClose()
        }
        console.log(obj)
        
    }
    
    return (
        <>
            <div className="payment-section d-flex df-acenter df-sbetween padding-20">
                <h3>Payment</h3>
                <p onClick={handleShow}>+ Add New Card</p>
            </div>
    
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Account Holder Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Account holder Name" />
                            {error && error.name && <p className="error-message">{error.name}</p> }
                        </div>
                        <div>
                            <label>Card Number</label>
                            <input type="number" minLength="16" maxLength="16" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                            {error && error.cardNumber && <p className="error-message">{error.cardNumber}</p> }
                        </div>
                        <div className="expiry-section">
                            <label>Expire Date</label>
                            <input type="number" value={expriyMonth} placeholder="MM" onChange={(e) => setExpriyMonth(e.target.value)} />/<input type="number" value={expiryYear} placeholder="YY" onChange={(e) => setExpiryYear(e.target.value)}/>
                            {error && error.expiryDate && <p className="error-message">{error.expiryDate}</p> }
                        </div>
                        <div>
                            <label>CVV</label>
                            <input type="number" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="CVV" />
                            {error && error.cvv && <p className="error-message">{error.cvv}</p> }
                        </div>

                        <input type="submit" value="Submit" className="submit-btn"></input>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddCard

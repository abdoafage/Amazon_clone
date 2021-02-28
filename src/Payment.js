import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import {Link , useHistory} from "react-router-dom";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer.js";
import axios from "axios";

function Payment() {
    const [{Basket,user},dispatch]=useStateValue();
    const history = useHistory();
    const stripe=useStripe();   
    const elements=useElements();

    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);

    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");

    const [clientSecret,setClientSecret]=useState(true)

    useEffect(()=>{
        const getClientSecret = async ()=>{
            const response = await axios({
                method:"post",
                url:`/Payment/create?total=${getBasketTotal(Basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        } 
        getClientSecret();
    },[Basket])

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            history.replace('/orders');
        })
    }

    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error? event.error.message : "");
    }
    return (
        <div className="Payment">
            <div className="Payment__container">
            <h1>
                Checkout {<Link to="/Checkout">({Basket?.length} items)</Link>}
            </h1>
                <div className="Payment__section">
                    <div className="Payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>3 streat abo homos ezbt elnakhl</p>
                        <p>cairo egypt</p>
                    </div>
                </div>
                <div className="Payment__section">
                    <h3 className="Payment__title">
                        Review items and delivery
                    </h3>
                    <div className="Payment__items">
                        {Basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                            price={item.price}
                            />
                        ))}
                    </div>
                </div>
                <div className="Payment__section">
                    <div className="Payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="Payment__details">
                            {/*  */}
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                            
                            <div className="Payment__priceContainer">
                            <CurrencyFormat
                                    renderText={(value)=>(
                                        <h3>subtotal ({Basket.length} items) : <strong>{value}</strong></h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(Basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing? <p>processing...</p> : "Buy Now"}</span>
                                </button>
                            </div>
                                    {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment

import React  from 'react'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import {useHistory } from "react-router-dom"; 
import "./Subtotal.css";

function Subtotal() {
    // const [{Basket,user},dispatch]=useStateValue
    const history = useHistory();
    const [{Basket,user},dispatch]=useStateValue();
    return (
        <div className="Subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>subtotal ({Basket.length} items) : <strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>this order contains a gift
                        </small>
                    </>
                )}
                decimalScale={3}
                value={getBasketTotal(Basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e=>history.push(`${user?"/Payment":"/Login"}`)}>proceed to checkout</button>
        </div>
    )
}

export default Subtotal

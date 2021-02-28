import React from 'react';
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct.js";
import "./Checkout.css"
import { useStateValue } from './StateProvider.js';
function Checkout() {
    const[{Basket,user},dispatch]=useStateValue();
    return (
        <div className="Checkout">
            <div className="Checkout__left">
                <img className="Checkout__ad"
                    src="pepsi-atlanta-super-bowl-2-2019.jpg"
                />
                <div className="">
                    <h3>Hello ,{console.log(user?.email)}</h3>
                    <h2 className="Checkout__title">Your shopping basket</h2>
                    <h2>
                        {
                            Basket.map(item=>(
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </h2>
                </div>
            </div>
            <div className="Checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,image,rating,price}) {
    const [Basket,dispatch]=useStateValue();
    console.log(Basket)
    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
    }
    return (
        <div className="Product">
            <div className="Product__info">
                <p>{title}</p>
                <p className="Product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="Product__rating">
                    {
                        Array(rating).fill().map((i)=>(
                            <img src="—Pngtree—star vector icon_3725282.png"/>
                        ))
                    }
                    
                </div>
            </div>
            <img src={image}/>
            <button onClick={addToBasket}>Add to car</button>
        </div>
    )
}

export default Product

import React, { useContext } from 'react'
import {UpdateContext} from './Context';
export default function ProductInCart({item}) {
    const {id, img, title,price, quantity} = item
    const {
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
    } = useContext(UpdateContext);
    return (
        <>
        <div className="product-img-incart">
            <img src={img} alt=""></img>
        </div>
        <div className="product-title">{title}</div>
        <div className="product-title">${price}</div>
        <div className="quantity-btn">
            <button className="cre-btn" 
            onClick={()=> {incrementQuantity(id)}}>+</button>
            {quantity}
            <button className="cre-btn"
            onClick={() => {decrementQuantity(id)}}>-</button>          
        </div>
        <div>
            <button         
            onClick={
                () => {
                    removeFromCart(id);
                            
                }
            } className="remove-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>      
        </>
    )
}

import React, { useContext } from 'react'
import { UpdateContext } from './Context';

export default function ProductInfo({item}) {
    const {addToCart} = useContext(UpdateContext);
    const {id, img, title, company, price, showInfo, info, inCart} = item;
    return (
        <div>
           {showInfo && <div className="product-info">
            <div className="product-info-img">
                    <img src={img} alt=""></img>
            </div>
            <div className="product-info-title">
                    <h3>{title}</h3>
                    <h3>Company: {company}</h3>
                    <h3>Information: {info}</h3>
                    <h3>${price}</h3>
                    {
                        inCart ? <div className="btn-info">
                            <button disabled={inCart}>
                                In Cart
                            </button>
                        </div> : <div>
                            <button onClick={() => addToCart(id)} 
                            disabled={inCart}
                            className="btn-info">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    }
            </div>
               
           </div>}          
        </div>
    )
}

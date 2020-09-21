import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { UpdateContext } from './Context';


export default function Product({item}) {
    const {addToCart, showInformation} = useContext(UpdateContext);
    const {id, title, img, price, inCart} = item;

    return (
        
          <div className="product">
           <div className="product-img">
           <Link to="/details" className="link-to-details" onClick={
          () => showInformation(id)
           }><img src={img} alt=""></img></Link>
             
             <button className="icon"
             onClick={
               () => addToCart(id)
             }
             disabled={inCart}
             >
               {inCart ? "In Cart"  :  <i className="fas fa-shopping-cart"></i>}
             </button>
           </div>
           <div className="product-title">
              <h3>{title}</h3>
              <h4>${price}</h4>
           </div>
        </div>
        
    )
}


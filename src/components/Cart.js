import React, { useContext, useEffect } from 'react'
import {ContextProvider, UpdateContext} from './Context';
import ProductInCart from './ProductInCart'
export default function Cart() {
    const {cart, total} = useContext(ContextProvider);
    const {clearCart, Total} = useContext(UpdateContext); 
    
    useEffect(() => {
        Total();
    }, [cart]);
    
    return (
        <div>
          <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              
          }}>
            <div>Product</div>
            <div>Name</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Remove</div>

          </div>
          <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)"
          }} className="cart-container">
          {cart.map(
              item => <ProductInCart item={item} />
          )}

          </div>
          <div>         
              <div>total: ${total}</div>
              <button className="clearCart-btn" onClick={() => clearCart()}>
                  Clear Cart
              </button>
          </div>
        </div>
    )
}

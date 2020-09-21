import React, { useState } from 'react'
import { storeProducts } from '../data';

export const ContextProvider = React.createContext();
export const UpdateContext = React.createContext();
export default function Context({children}) {
    const [state, setState] = useState({
        products: storeProducts.map(
            item => {
                return {...item,
                    inCart: false,
                    showInfo: false,
                    quantity: 0,
                    
                }
            }
        ),
        cart: [],
        total: 0,
        totalQuantity: 0
    });

    const products = state.products;
    const cart = state.cart;
    const total = state.total;
    const totalQuantity = state.totalQuantity;


    // increment-quantity
    const incrementQuantity = (id) => {
        const temp = products.find(
            item => item.id === id
        )
        temp.quantity = temp.quantity + 1;      
        setState(prev => {
            return {...state}
        })
        Total();

        
    }
    //decrement-quantity
    const decrementQuantity = (id) => {
        const temp = products.find(
            item => item.id === id
        )
        temp.quantity = temp.quantity -1 ;
            
        setState(prev => {
            if(temp.quantity === 0){
                removeFromCart(id)
            }
            return ({
                ...state
            })
        })
        Total(); 
        
        
    }

    const addToCart = (id) => {
        const tempItem = products.find(
            item => item.id === id
        )
        tempItem.quantity = tempItem.quantity + 1;
        tempItem.inCart = true;

        setState(prev => {
            return {...state, cart: [...state.cart, tempItem] }
        })
        
    } 

    const removeFromCart = (id) => {
        const tempItem = cart.find(
            item => item.id === id
        )
        tempItem.inCart = false;
        tempItem.quantity = 0;
        const tempCart = cart.filter(
            item => item.id !== id
        )
        setState(prev => {   
            return {...state, cart: tempCart}  
        })
        
        
        
        
    }

    const clearCart = () => {
        setState(prev => {
            return {cart: [], 
            products: storeProducts.map(item => {
                return {...item, inCart: false}
            }) }
        })
        
        
    }

    const showInformation = (id) => {
        const tempProduct = products.find(
            item => item.id === id
        )
        tempProduct.showInfo = true;
        setState(prev => {
            return {...state}
        })
    }
    const unShowInformation = () => {
        products.forEach(
            item => item.showInfo = false
        )
        setState(prev => {
            return {...state}
        })
    }
    const Total = () => {
        if(cart.length > 0){
            const tmpArr = cart.map(
                item => item.price * item.quantity
            )
            const tmpPrice = tmpArr.reduce(
                (a, b) => a + b
            , 0)
            setState(prev => {
                return {...state, total: tmpPrice}
            })
        }
        else if(cart.length === 0){
            setState(prev => {
                return {...state, total: 0}
            })
        }
    }
    const setQuantity = () => {
        const tmpQ = products.reduce(
            (a, b) => a.quantity + b.quantity
        , 0);
        
        setState(prev => {
            return {...state, totalQuantity: tmpQ}
        })
    }
    
    
    
    const updateState = {
        addToCart: addToCart,
        clearCart: clearCart,
        removeFromCart: removeFromCart,
        incrementQuantity: incrementQuantity,
        decrementQuantity: decrementQuantity,
        showInformation: showInformation,
        unShowInformation: unShowInformation,
        Total: Total,
        setQuantity: setQuantity
        

    }

    return (
        <ContextProvider.Provider value={state}>
            <UpdateContext.Provider value={updateState}>
                {children}
            </UpdateContext.Provider>
        </ContextProvider.Provider>
    )
}

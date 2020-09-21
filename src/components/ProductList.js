import React, { useContext } from 'react'
import { ContextProvider } from './Context'
import Product from './Product';

export default function ProductList() {
    const {products} = useContext(ContextProvider)
    console.log(products);
    return (
        <div className="products-container">
        {products.map(
            item => <Product item={item} />
        )}    
        </div>
    )
}

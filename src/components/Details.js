import React, { useContext } from 'react'
import { ContextProvider } from './Context'
import ProductInfo from './ProductInfo';

export default function Details() {
    const {products} = useContext(ContextProvider);
    console.log(products)
    return (
        <div>
        {
            products.map(
                item => <ProductInfo item={item} />
            )
        }
        </div>
    )
}

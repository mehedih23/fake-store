import React, { useState, useEffect } from 'react'
import Product from '../Product/Product'
import './Products.css'

const Products = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))

    }, [])

    return (
        <div >
            <div className="products-container">
                {
                    products.map(product => <Product updateProduct={props.updateProductNumber} key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    )
}

export default Products
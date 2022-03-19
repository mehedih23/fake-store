import React from 'react'
import InfoModal from '../InfoModal/InfoModal';

const Product = (props) => {
    const { image, title, price } = props.product;
    return (
        <div className='mb-5'>
            <img className='w-50 mb-3' src={image} alt="product" srcSet="" />
            <h3>{title.length > 25 ? title.slice(0, 25) : title}</h3>
            <h4 className='mb-3'>Price : {price}$</h4>
            <div>
                <button onClick={props.updateProduct} className='btn btn-primary mx-2'>Add Cart</button>
                <button className='btn btn-danger mx-2'>Delete</button>
                {/* <button className='btn btn-info mx-2'>Info</button> */}
                <InfoModal product={props.product}></InfoModal>
            </div>
        </div>
    )
}

export default Product
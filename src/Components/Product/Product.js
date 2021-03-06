import InfoModal from '../InfoModal/InfoModal';

const Product = (props) => {
    const { image, title, price } = props.product;
    return (
        <div className='mb-5' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img className='w-50 mb-3' src={image} alt="product" srcSet="" />
            <h3>{title.length > 25 ? title.slice(0, 25) : title}</h3>
            <h4 className='mb-3'>Price : {price}$</h4>
            <div>
                <button onClick={props.updateProduct} className='btn btn-primary mx-2'>Add Cart</button>
                <button className='btn btn-danger mx-2' >Delete</button>
                <InfoModal product={props.product}></InfoModal>
            </div>
        </div>
    )
}

export default Product
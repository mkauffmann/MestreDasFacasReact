import React from 'react'
import { Link } from 'react-router-dom'


import './CheckoutProduct.css'


function CheckoutProduct(props) {

    return (
        <>
            <Link to={`/product/${props.item.product.id}`} className="checkout-link">
                <div className="list-group-item mb-3">
                    <div className="row g-3">
                        <div className="col-4 col-md-3 col-lg-2">
                            <img width="100" src={props.item.product.image} class="img-thumbnail" alt="product-thumbnail" />
                        </div>
                        <div className=" col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                            <h5 className="subtitle">{props.item.product.productName}</h5>
                            <p className="checkout-description">{props.item.product.descriptionProduct}</p>
                        </div>
                        <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                            <div className="text-right mt-2">
                                <small className="text-secondary">Quantidade: {props.item.quantity}</small><br></br>
                                <span className="text-dark">Valor Total: {props.item.product.productPrice !== undefined ? props.item.product.productPrice.value * props.item.quantity : ""}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CheckoutProduct
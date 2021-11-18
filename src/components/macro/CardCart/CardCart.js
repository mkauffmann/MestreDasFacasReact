import React from 'react'
import './CardCart.css'
import { Link } from 'react-router-dom'

import iconlix from '../../../assets/icons/checkout/lixeira.png'


function CardCart(props) {

    return (
        <>
            <ul class="list-group">
                <li class="list-group-item">
                    <div className=" col-3 col-md-2 col-lg-1" >
                        <img style={{ float: "left" }} className="img-thumbnail" width="100px" src={props.imagem} ></img>

                    </div>
                    <div style={{ float: "left" }} class="mt-1 mx-1 col-8 col-md- col-lg-5 col-xl-6 align-self-center" >

                        <div className="text-produto-nome text-decoration-none text-danger">{props.productName}</div>

                        <small  >
                            {props.descriptionProduct}
                        </small>
                    </div>
                    <div style={{ float: "left" }} class="mt-3 text-right col-6  col-md-6 col-lg-2 col-xl-2      ">
                        <small class="text-secondary">Subtotal: {props.productPrice}</small><br></br>
                        <span class="text-dark">Valor Total:  {props.productPrice}</span>

                    </div>
                    <div class="btn-group mt-4  col-6  col-md-3 col-4 col-xl-2 align-self-center justify-content-end " role="group" aria-label="...">

                        <button o class="  btn-custom">-</button>

                        <input style={{ textAlign: "center" }} type="text" id="inc" value={props.quantidade} />

                        <button type="button" type="button" class="  btn-custom">+</button>

                        <button type="button" class="  mx-4 btn-lix-custom" ><img style={{ border: "none" }} width="25px" src={iconlix} /></button>
                    </div>
                </li>

            </ul>

        </>
    )
}

export default CardCart
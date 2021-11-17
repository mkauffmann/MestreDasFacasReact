import React from 'react'
import './CardCart.css'
import { Link } from 'react-router-dom'

import iconlix from '../../../assets/icons/checkout/lixeira.png'


function CardCart(props) {

    return (
        <>


                            <div className="col-4 col-md-3 col-lg-1" >
                            <img style={{ float: "left" }} className="img-thumbnail" width="100px" src={props.imagem} ></img>

                        </div>



                        <div class="col-8 col-md-9 col-lg-6 col-xl-5 align-self-center" >

                            <div className="text-produto-nome text-decoration-none text-danger">{props.productName}</div>

                            <small >
                                {props.descriptionProduct}
                            </small>

                        </div>
                        

                        <div class="text-right col-6  col-md-8 col-lg-2     ">
                            <small class="text-secondary">Subtotal: {props.productPrice}</small><br></br>
                            <span class="text-dark">Valor Total:  {props.productPrice}</span>

                        </div>


                        <div style={{ float: "left" }} class="btn-group  col-6  col-md-4 col-4 align-self-center justify-content-center " role="group" aria-label="...">

                            <button o class="  btn-custom">-</button>

                            <input style={{ textAlign: "center" }} type="text" id="inc" value="1" />

                            <button type="button" type="button" class="  btn-custom">+</button>

                            <button type="button" class="  mx-4 btn-lix-custom" ><img style={{ border: "none" }} width="25px" src={iconlix} /></button>
                        </div>





        </>
    )
}

export default CardCart
import React, { useState, useEffect } from 'react'
import iconlix from '../../../assets/icons/checkout/lixeira.png'
import './ProductList.css'
import axios from 'axios'



function ProductList(props) {


    const addToCart = (item) => {
        let cartList = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
        cartList.push(item)
        let cartString = JSON.stringify(cartList)
        localStorage.setItem("cart", cartString)
        localStorage.setItem('qtyCart', JSON.stringify(cartList.length))
        props.setQtyCart(cartList.length)
        
    }

    const removeFromCart = (item) =>{

       


    


    }
    




    const listProducts = () => {
        return props.products.map((item) => {
            return (
                
                
                <li className="list-group-item " key={item.id}>
                    <div  className="row ">

                        <div   className="col-4 col-md-3 col-lg-1" >
                            <img style={{float: "left"}}  className="img-thumbnail" width="100px" src={item.image} ></img>
                            
                        </div>



                        <div   class="col-8 col-md-9 col-lg-6 col-xl-5 align-self-center" >

                            <div  className="text-produto-nome text-decoration-none text-danger">{item.productName}</div>

                            <small >
                                {item.descriptionProduct}
                            </small>

                            

                           


                        </div>

                        

                        


                            <div style={{float: "left"}} class="btn-group  col-6  col-md-4 col-4 align-self-center justify-content-center " role="group" aria-label="...">

                                <button type="button" class="  btn-custom">-</button>

                                <input style={{ textAlign: "center" }} type="text"  value="1" />

                                <button type="button" class="  btn-custom">+</button>

                                <button onClick={() => removeFromCart(item.id)} type="button" class="  mx-4 btn-lix-custom" ><img  style={{ border: "none" }}  width="25px" src={iconlix} /></button>
                            </div>



                            <div  class="text-right col-6  col-md-8 col-lg-2     ">
                            <small class="text-secondary">Subtotal: {item.productPrice.value}</small><br></br>
                            <span class="text-dark">Valor Total: {item.productPrice.value}</span>

                        </div>

                        


                            
                        



                        

                        


                    </div>


                    {
                        props.cart
                            ? ''
                            : <button onClick={() => addToCart(item)}>Comprar</button>
                    }

                </li>
                
            )
        })
    }

    return (
        <ul>
            {listProducts()}
        </ul>
    )
}

export default ProductList
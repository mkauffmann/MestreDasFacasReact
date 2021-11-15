
import React from 'react'
import imgProduct from '../../assets/imgs/Product/PRODUTO.jpg'
import './Cart.css'


import Product from '../../components/micro/Product/Product'


function Cart(props) {

    return(
        <>
        <div class="container">


           <h1>Meu carrinho</h1>

           <ul className="list-group mb-3">

            <li className="list-group-item py-3">
                
        <Product/>
            
            </li>
            <li className="list-group-item py-3">
                
            <Product/>

            </li>

            <li className="list-group-item py-3">
                
                
            <Product/>

            </li>
            
        
            

        </ul>
           
           
           
           </div>
        </>
    )
}

export default Cart
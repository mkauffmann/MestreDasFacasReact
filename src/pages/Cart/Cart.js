
import React from 'react'
import imgProduct from '../../assets/imgs/product/PRODUTO.jpg'
import './Cart.css'
import Button from '../../components/micro/Button/Button'
import Product from '../../components/micro/ProductComp/ProductComp'
import Faca1 from '../../assets/imgs/produtos/1.jpeg'
import Faca2 from '../../assets/imgs/produtos/2.jpeg'
import Faca3 from '../../assets/imgs/produtos/3.jpeg'
import TotalValue from '../../components/micro/TotalValueCart/TotalValueCart'

function Cart(props) {

    return(
        <>
        <div class="container">


           <h1>Meu carrinho</h1>

           <ul className="list-group mb-3">

            <li className="list-group-item py-3">
                
        <Product imagem={Faca1} />
            
            </li>
            <li className="list-group-item py-3">
                
            <Product imagem={Faca2}/>

            </li>

            <li className="list-group-item py-3">
                
                
            <Product imagem={Faca3}/>
            

            </li>
            
        
            

        </ul>
           
           
        <TotalValue/>
           
           </div>

           


        </>
    )
}

export default Cart
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductList from '../../components/micro/ProductList/ProductList';

function Cart(props) {
    
    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)


    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("cart")))
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart")))
        
   
    },[])

    return(
        <>

<div class="container">
<ul class="list-group mb-3">
        

            

           
     <h2> {qtyCart}</h2>
  

        
        <ProductList products={products} cart/>
        
        </ul>
        </div>
      
        <Link to='/'>Home</Link>
        </>
    )
}

export default Cart
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductList from '../../components/micro/ProductList/ProductList';
import './Cart.css'
function Cart(props) {

    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)
    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("cart")))
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart")))
    }, [])

    return (
        <>
            <div class="container">
                <h1 >Meu Carrinho</h1>
                <ProductList products={products} />
            </div>

        </>
    )
}

export default Cart
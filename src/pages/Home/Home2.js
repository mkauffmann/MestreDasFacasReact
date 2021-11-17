import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ProductListHome from '../../components/micro/ProductList/ProductListHome';

function Home(props) {




    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)
    const [qtyProd, setQtyProd] = useState(1)

    useEffect(() => {
        getProducts()
        setQtyCart(JSON.parse(localStorage.getItem('qtyCart')))
        setQtyProd(JSON.parse(localStorage.getItem('qtyProd')))
    }, [])

    const getProducts = () => {
        axios.get('http://localhost:8080/product').then((response) => {
            setProducts(response.data)
        })
    }



    return (
        <>


            <div className="main_div">

                <div className="center_div">


                    <div className="btn_div">



                    </div>




                </div>







            </div>


            <h1>Home</h1>
            <h2>{qtyCart}</h2>
            <h2></h2>
            <h2>c{qtyProd}</h2>
            <ProductListHome products={products} setQtyCart={setQtyCart} postProducts={setProducts} />
            <Link to='/cart'>Ver Carrinho</Link>
        </>
    )
}

export default Home
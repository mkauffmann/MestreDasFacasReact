import React from 'react'
import '../../components/micro/Button/Button.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

function Product(props) {
    const {id}= useParams()
    const [produto, setProduto] = useState({})

// USE EFFECT DE NOVIDADES
useEffect(() => {
    axios.get(`http://localhost:8080/product/${id}`)
    .then((response) =>{
        setProduto({...response.data})
        
        
    })
    .catch((error) =>{
        console.error("Aconteceu um erro!" + error)
    })
}, [])
    return (
        <>
           <div>
               <ProductCard produto = {{...produto}}/>
           </div>
        </>
    )
}

export default Product
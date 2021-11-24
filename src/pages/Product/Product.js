import React from 'react'
import '../../components/micro/Button/Button.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import useCart from '../../hooks/useCart'

function Product(props) {
    const {id}= useParams()
    const [produto, setProduto] = useState({})

    const {getInventory} = useCart()
    const [emEstoque, setEmEstoque] = useState(false)
    const verificarEstoque = async () => {
        setEmEstoque(await getInventory(id) > 0)
    }
// USE EFFECT DE NOVIDADES
useEffect(() => {
    axios.get(`http://localhost:8080/product/${id}`)
    .then((response) =>{
        setProduto({...response.data})
        
        
    })
    .catch((error) =>{
        console.error("Aconteceu um erro!" + error)
    })
    verificarEstoque()
}, [])
    return (
        <>
           <div>
               <ProductCard produto = {{...produto}} emEstoque={emEstoque}/>
           </div>
        </>
    )
}

export default Product
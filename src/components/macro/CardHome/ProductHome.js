import React from 'react'
import '../../micro/Button/Button.css'
import { useEffect, useState } from 'react'


import useCart from '../../../hooks/useCart'
import CardHome from './CardHome'

function ProductHome(props) {
    const id = props.produto.id

    const { getInventory } = useCart()
    const [emEstoque, setEmEstoque] = useState(false)

    const verificarEstoque = async () => {
        setEmEstoque(await getInventory(id) > 0)
    }

    useEffect(() => {
        verificarEstoque()
    }, [])

    return (
        <>
            <CardHome produto={{ ...props.produto }} emEstoque={emEstoque} />
        </>
    )
}

export default ProductHome
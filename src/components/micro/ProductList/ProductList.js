import React, { useState, useEffect } from 'react'
import './ProductList.css'
import CardCart from '../../macro/CardCart/CardCart'
function ProductList(props) {

    const checkItemCart = (item, cartList) => {
        if (cartList.length > 0) {
            for (let i = 0; i < cartList.length; i++) {

                if (cartList[i].product.id == item.product.id) {

                    cartList[i].quantity += 1;
                    return true;
                }
            }
            return false
        }
    }
    const createItemRequest = (prod) => {
        let itemRequest = {
            quantity: 1,
            product: { ...prod }
        }
        return itemRequest;

    }
    const addToCart = (item) => {
        let cartList = localStorage.getItem("itemRequest")
            ? JSON.parse(localStorage.getItem("itemRequest"))
            : []

        let newItemRequest = createItemRequest(item)

        if (!checkItemCart(newItemRequest, cartList)) {
            cartList.push(newItemRequest)
        }
        let cartString = JSON.stringify(cartList)
        localStorage.setItem("itemRequest", cartString)
        localStorage.setItem('qtyCart', JSON.stringify(cartList.length))
        props.setQtyCart(cartList.length)
    }
    const listProducts = () => {



        let items = JSON.parse(localStorage.getItem("itemRequest"))


        if (items == null) {
            return "Seu carrinho esta vazio"

        }
        return items.map((item, index) => {
            return (
                <>
                    <CardCart key={index} quantidade={item.quantity} descriptionProduct={item.product.descriptionProduct} productPrice={item.product.productPrice.value} productName={item.product.productName} imagem={item.product.image} />
                </>

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
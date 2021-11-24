import React, { useEffect, useState } from 'react'
function useCart(props){
    const [qtyCart, setQtyCart] = useState(0)
    
    useEffect(() => {
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart")))
        
    }, [])

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
    setQtyCart(cartList.length)
   
    
}

return {
    createItemRequest,
    addToCart,
    checkItemCart
    
}

}

export default useCart
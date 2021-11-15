import React from 'react'

function ProductList(props) {

    const addToCart = (item) => {
        let cartList = localStorage.getItem("cart") 
            ? JSON.parse(localStorage.getItem("cart")) 
            : []
        cartList.push(item)
        let cartString = JSON.stringify(cartList)
        localStorage.setItem("cart", cartString)  
        localStorage.setItem('qtyCart', JSON.stringify(cartList.length))
        props.setQtyCart(cartList.length)
    }

    const listProducts = () => {
        return props.products.map((item) => {
            return (
                
                <li style={{display: "inline-block"}}  key={item.id}>
                    <div>{item.productName}</div>
                    <div>{item.productPrice.value}</div>
                    <div><img width="120px" src={item.image}/></div>
                    {
                        props.cart 
                            ? '' 
                            : <button onClick={()=> addToCart(item)}>Comprar</button>
                    }
                    
                </li>
                
            )
        })
    }

    return(
        <ul>
            { listProducts() }
        </ul>
    )
}

export default ProductList
import React from 'react'
import iconlix from '../../../assets/icons/checkout/lixeira.png'
import './ProductList.css'

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
                
                
                <li className="list-group-item " key={item.id}>
                    <div  className="row ">

                        <div   className="col-4 col-md-3 col-lg-1" >
                            <img style={{float: "left"}}  className="img-thumbnail" width="100px" src={item.image} ></img>
                            
                        </div>



                        <div   class="col-8 col-md-6 col-lg-6 col-xl-8 align-self-center" >

                            <div  className="text-produto-nome text-decoration-none text-danger">{item.productName}</div>

                            <small >
                                {item.descriptionProduct}
                            </small>

                            

                           


                        </div>

                        <div class="text-right col-6  col-md-2 col-lg-2   ">
                            <small class="text-secondary">Subtotal: {item.productPrice.value}</small><br></br>
                            <span class="text-dark">Valor Total: {item.productPrice.value}</span>

                        </div>

                        <div class="text-right col-6  col-md-2 col-lg-2   ">


                            
                        </div>



                        

                        


                    </div>


                    {
                        props.cart
                            ? ''
                            : <button onClick={() => addToCart(item)}>Comprar</button>
                    }

                </li>
                
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
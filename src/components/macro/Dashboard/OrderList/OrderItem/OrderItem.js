import React from "react"

import './OrderItem.css'

function OrderItem(props){
    return (
        <>
         <div className="container-fluid d-flex col-12 numeroPedido">
            <div className="container-fluid  col-6 pedidosMobile">NÚMERO DO PEDIDO
                <p>#{props.number}</p>
            </div>
            <div className="container-fluid col-6 pedidosMobile">
                <a href="./detalhesPedido.html"><button className="btn-prinCipal "><i
                            className="pedido">DETALHES DO
                            PEDIDO</i></button></a>
            </div>
        </div>
        </>
    )
}

export default OrderItem
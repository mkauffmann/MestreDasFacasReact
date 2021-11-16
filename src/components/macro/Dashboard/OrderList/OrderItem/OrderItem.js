import React from "react"
import { Link } from "react-router-dom"

import './OrderItem.css'

function OrderItem(props) {
    return (
        <>
            <div className="container-fluid d-flex col-12 numeroPedido">
                <div className="container-fluid  col-6 pedidosMobile">
                    NÚMERO DO PEDIDO
                    <p>#{props.number}</p>
                </div>
                <div className="container-fluid col-6 pedidosMobile">
                    <Link to={{ pathname : "/orderDetails",
                                state: {...props.order}}}>
                        <button className="btn-prinCipal ">
                            <i className="pedido">DETALHES DO PEDIDO</i>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default OrderItem
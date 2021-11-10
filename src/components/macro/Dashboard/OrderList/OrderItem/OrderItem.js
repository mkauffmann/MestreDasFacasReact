import React from "react"
import {ReactComponent as NFIcon} from '../../../../../assets/icons/dashboard/nf.svg'

import './OrderItem.css'

function OrderItem(props){
    return (
        <>
         <div className="container-fluid d-flex col-12 numeroPedido">
            <div className="container-fluid  col-4 pedidosMobile">NÚMERO DO PEDIDO
                <p>#23872146</p>

            </div>
            <div className="container-fluid col-4 pedidosMobile">NF-E
                <p> <a href="#"><NFIcon/></a>
                </p>
            </div>
            <div className="container-fluid col-4 pedidosMobile">
                <a href="./detalhesPedido.html"><button className="btn-prinCipal "><i
                            className="pedido">DETALHES DO
                            PEDIDO</i></button></a>
            </div>
        </div>
        </>
    )
}

export default OrderItem
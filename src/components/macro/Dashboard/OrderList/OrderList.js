import React from 'react'

import OrderItem from './OrderItem/OrderItem'
import './OrderList.css'

function OrderList(props){
    return (
        <>
            <div className="col-12 d-flex justify-content-between mb-4">
                <h3>Meus Pedidos</h3>
            </div>
            <OrderItem number="123"/>
        </>
    )
}

export default OrderList
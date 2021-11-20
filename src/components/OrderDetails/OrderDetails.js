import React from 'react'
import './OrderDetails.css'
import imgProduct from '../../assets/imgs/produtos/1.jpeg'
import Button from '../../components/micro/Button/Button'
import CheckoutProduct from '../../components/macro/Checkout/CheckoutProduct/CheckoutProduct'
import AddressInfoItem from '../macro/Dashboard/InfoList/InfoItem/AddressInfoItem/AddressInfoItem'

function OrderDetails(props) {
    const items = props.order.itemRequest
    const renderList = () => {
        return items.map((item, index) => {
            return <CheckoutProduct item={item} key={index} />
        })
    }

    return (
        <>
            <div>
                <p style={{ fontweight: "bold", color: "#860E1C", fontsize: "24px" }}>Detalhes do pedido:</p>
            </div>
            <div className="shadow p-3 mb-5 bg-white rounded list-group list-group-horizontal-md d-flex justify-content-center ">
                <div className="d-flex flex-column">
                    {renderList()}
                    <h4 className="align-self-end">Valor total: <strong>{(props.order.totalValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></h4>
                </div>
                
            </div>


        </>
    )

}

export default OrderDetails
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
                <div>
                    {renderList()}
                </div>
                <div className="teste list-group-item d-flex flex-column justify-content-end">
                    <div>
                        <h3 className="text-produto-nome">Endereço de entrega</h3>
                        <AddressInfoItem obj={props.order.address} show />
                    </div>
                    <div>
                        <Button navigation route='/dashBoard/myOrders' label='Meus pedidos' class='btn-cancelar mx-1' sytle={{ width: "100%" }} />
                        <Button navigation route='/' label='Realizar uma nova compra' class='btn-principal' />
                    </div>
                </div>
            </div>


        </>
    )

}

export default OrderDetails
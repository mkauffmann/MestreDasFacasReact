import React from 'react'
import './OrderDetails.css'
import Button from '../../components/micro/Button/Button'
import { Link, useLocation } from 'react-router-dom'

function OrderDetails(props) {
    const location = useLocation()
    const order = location.state
    const itemQty = order.itemRequest.length

    const formatDate = (date) => {
        if (date !== null){
            let arr = date.split("-")
        return `${arr[2]}/${arr[1]}/${arr[0]}`
        }
    }

    return (
        <>
            <div>
                <div class="container col-12">
                    <h1 style={{ color: '#860E1C' }}>Detalhes do pedido</h1>
                    <hr />
                </div>

                <div class="container d-flex col-12 ">

                    <div class="container  col-6">Pedido nº:</div>
                    <div class="container  col-6"><b> {order.id}</b></div>
                </div>
                <div class="container d-flex col-12">

                    <div class="container col-6">Realizado em:</div>
                    <div class="container col-6"><b>{formatDate(order.purchaseDate)}</b></div>
                </div>
                <div class="container d-flex col-12">

                    <div class="container col-6">Data do Pagamento</div>
                    <div class="container col-6"><b>{formatDate(order.paymentDate)}</b></div>
                </div>
                <div class="container d-flex col-12">

                    <div class="container col-6">Valor total ({itemQty == 1 ? "1 item" : `${itemQty} itens`}):</div>
                    <div class="container col-6"><b>{order.totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b></div>

                </div>


                <div class="container col-12"><hr />
                    <div class=" col-12 subTitulo">
                        <svg style={{ height: '20px' }}
                            x="0px" y="0px" viewBox="0 0 426.667 426.667"
                        >
                            <g>
                                <polygon
                                    points="293.333,135.04 190.08,240.213 137.173,187.093 108.8,215.467 192.213,298.667 326.187,168.747 		">
                                </polygon>
                            </g>
                            <g>
                                <path
                                    d="M213.333,0C95.513,0,0,95.513,0,213.333s95.513,213.333,213.333,213.333s213.333-95.513,213.333-213.333 S331.154,0,213.333,0z M213.333,388.053c-96.495,0-174.72-78.225-174.72-174.72s78.225-174.72,174.72-174.72 c96.446,0.117,174.602,78.273,174.72,174.72C388.053,309.829,309.829,388.053,213.333,388.053z">
                                </path>
                            </g>
                        </svg>
                        <i class="statusPedido"> {order.deliveryStatus.description_status_delivery}</i></div>
                    <hr /></div>
                <div class="container col-12"> <div class=" col-12">
                    <h2>Pedido</h2>

                </div></div>





                {/* <!-- TITULO PEDIDO --> */}


                <div class="container d-flex col-12">

                    <div class=" col-6">
                        Frete
                    </div>
                    <div class=" col-6">
                        <b> Fixo</b>

                    </div>
                </div>
                <div class="container d-flex col-12">

                    <div class=" col-6">
                        Valor Frete
                    </div>
                    <div class=" col-6">
                        <b>{(order.freightFixed).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b>

                    </div>
                </div>
                <div class="container d-flex col-12">

                    <div class=" col-6">
                        Valor Total
                    </div>
                    <div class=" col-6">
                        <b>{(order.finalValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b>

                    </div>
                </div>

                <div class="container d-flex col-12">

                    <div class=" col-6">
                        Pagamento
                    </div>
                    <div class=" col-6">
                        <b>{order.typePayment.description_type_payment}</b>

                    </div>
                </div>
                <div class="container d-flex col-12">

                    <div class=" col-6">
                        Valor:
                    </div>
                    <div class=" col-6">
                        <b>{(order.finalValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b>

                    </div>
                    <hr />
                </div>

                <div class="container">
                    <hr />
                    <div>
                        <h2>Endereço de Entrega</h2>
                    </div>
                    <div>{order.address.street}, {order.address.number}</div>

                    {order.address.complement !== null
                        ? <div>{order.address.complement}</div>
                        : ""}

                    <div>{order.address.neighborhood}</div>
                    <div>CEP {order.address.cep}</div>
                    <div>{order.address.city.cityName}, {order.address.state.uf}</div>
                    <hr />
                </div>
                <div class="container d-flex flex-row-reverse bd-highlight" style={{ marginBottom: '20px' }}>
                    <Link to="dashboard/myOrders"><Button label="Voltar" class="btn-default btn-cancelar btn-back"></Button></Link>

                </div>
            </div>
        </>
    )
}

export default OrderDetails
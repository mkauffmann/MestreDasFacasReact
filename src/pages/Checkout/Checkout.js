import React, { useState, useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import './Checkout.css'

import { Link } from 'react-router-dom'
import axios from 'axios'

import Button from '../../components/micro/Button/Button'
import '../../components/micro/Button/Button.css'
import useLogin from '../../hooks/useLogin'
import CheckoutProduct from '../../components/macro/Checkout/CheckoutProduct/CheckoutProduct'
import PaymentTypeForm from '../../components/macro/Checkout/PaymentTypeForm/PaymentTypeForm'
import TotalValueCheckout from '../../components/micro/TotalValueCheckout/TotalValueCheckout'
import ProductComp from '../../components/micro/ProductComp/ProductComp'
import DividingBar from '../../components/micro/Login/DividingBar/DividingBar'
import AddressList from '../../components/macro/Dashboard/InfoList/AddressList'



const initialValues = {
    freightFixed: 3.55,
    purchaseDate: new Date(),
    paymentDate: "",
    typePayment: {
        description_type_payment: ""
    },
    deliveryStatus: {
        description_status_delivery: "PEDIDO EFETUADO"
    },
    address: {},
    customer: {},
    itemRequest: []
}


function Checkout(props) {
    const { userId, token, logout, refreshPage } = useLogin()
    const getCustomerUrl = `http://localhost:8080/customers/${userId}`

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const itemRequest = JSON.parse(localStorage.getItem("itemRequest"))
    const [order, setOrder] = useState({ ...initialValues, itemRequest, customer: {id : userId} })
    let totalValue = 0;

    const getUser = () => axios.get(getCustomerUrl, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            setUser({ ...response.data })
            setIsLoading(false)
        })
        .catch(error => {
            logout()
            refreshPage()
        })

    const renderUser = async () => {
        await getUser()
    }

    useEffect(() => {
        renderUser()
    }, [])

    const renderItems = () => {
        return itemRequest.map((item, index) => {
            totalValue += item.quantity * item.product.productPrice.value
            return <CheckoutProduct item={item} key={index} />
        })
    }

    const chooseDeliveryAddress = (value) => {
        setOrder(prevValues => {
            return {
                ...prevValues,
                address: {
                    id: value
                }
            }
        })

    }

    const choosePaymentType = (value) => {
        let description = value === "cartaoDeCredito" ? "Cartão de Crédito" : value

        setOrder(prevValues => {
            return {
                ...prevValues,
                typePayment: {
                    description_type_payment: description
                }
            }
        })
    }

    const handleOrder = () => {
        console.log(order)
    }

    return (
        <>
            <Container className="mb-5">
                <Row>
                    <h1> Finalizar compra </h1>
                    <DividingBar singleLine />
                </Row>
                <Row>
                    <Col md={6} className="mb-5">
                        <Row>
                            <AddressList type="endereço" subtitle="Endereço de entrega" userData={user} isLoading={isLoading} select chooseDeliveryAddress={chooseDeliveryAddress} />
                        </Row>
                        <DividingBar singleLine />
                        <Row>
                            <PaymentTypeForm choosePaymentType={choosePaymentType} />
                        </Row>
                    </Col>
                    <Col md={6}>
                        <div className="checkout-itens">
                            <h4 className="subtitle">Itens</h4>
                            {renderItems()}
                            <DividingBar singleLine />
                            <div className="mb-3">
                                <TotalValueCheckout numero={itemRequest.length} info={itemRequest.length == 1 ? "item" : "itens"} valor={totalValue} />
                                <TotalValueCheckout info="Frete fixo" valor={initialValues.freightFixed} />
                                <DividingBar singleLine />
                                <TotalValueCheckout info="Total" valor={totalValue + initialValues.freightFixed} />
                            </div>
                            <button class="btn-principal btn-principal-finalizar" onClick={handleOrder} >Finalizar Compra</button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>

    )

}

export default Checkout
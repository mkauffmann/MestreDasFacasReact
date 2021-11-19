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
import DividingBar from '../../components/micro/Login/DividingBar/DividingBar'
import AddressList from '../../components/macro/Dashboard/InfoList/AddressList'
import CreditCardList from '../../components/macro/Dashboard/InfoList/CreditCardList'




const initialValues = {
    freightFixed: 3.55,
    purchaseDate: new Date().toISOString().slice(0,10),
    paymentDate: "",
    typePayment: {
        description_type_payment: null
    },
    deliveryStatus: {
        description_status_delivery: "PEDIDO EFETUADO"
    },
    address: null,
    creditCard : null,
    customer: {},
    itemRequest: []
}


function Checkout(props) {
    const { userId, token, logout, refreshPage } = useLogin()
    const getCustomerUrl = `http://localhost:8080/customers/${userId}`
    const postOrderUrl = 'http://localhost:8080/request'

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const itemRequest = JSON.parse(localStorage.getItem("itemRequest"))
    const [order, setOrder] = useState({ ...initialValues, itemRequest, customer: { id: userId } })
    const [orderId, setOrderId] = useState("")
    let showCreditCards = order.typePayment.description_type_payment === "Cartão de Crédito"
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

    const postOrder = () => axios.post(postOrderUrl, order, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        if(response.status === 201){
            setOrderId(response.data.id)
        }
    })
    .catch(error => {
        alert(error.message)
    })

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
                    id : value
                }
            }
        })

    }

    const chooseCreditCard = (value) => {
        setOrder(prevValues => {
            return {
                ...prevValues,
                creditCard : {
                    id : value
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
                },
                creditCard : null
            }
        })
    }

    const validateOrder = () => {
        if(order.address === null){
            alert("Selecione um endereço de entrega")
            return false
        }
        if (order.typePayment.description_type_payment === null){
            alert("Selecione uma forma de pagamento")
            return false
        }
        if(order.typePayment.description_type_payment === "Cartão de Crédito" && order.creditCard == null){
            alert("Selecione um cartão de crédito")
            return false
        }
        return true
    }

    const handleOrder = () => {
        if(validateOrder()){
            postOrder()
        }
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
                            {showCreditCards
                                ? <>
                                    <DividingBar singleLine />
                                    <CreditCardList subtitle="Cartões de crédito" userData={user} isLoading={isLoading} select chooseCreditCard={chooseCreditCard} />
                                </>
                                : ""}
                        </Row>
                        <Row>

                        </Row>
                    </Col>
                    <Col md={6}>
                        <div className="checkout-itens">
                            <h4 className="subtitle">Itens</h4>
                            {renderItems()}
                            <DividingBar singleLine />
                            <div className="mb-3">
                                <TotalValueCheckout numero={itemRequest.length} info={itemRequest.length == 1 ? "item" : "itens"} valor={totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} />
                                <TotalValueCheckout info="Frete fixo" valor={initialValues.freightFixed.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} />
                                <DividingBar singleLine />
                                <TotalValueCheckout info="Total" valor={(totalValue + initialValues.freightFixed).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} />
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
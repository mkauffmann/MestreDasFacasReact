import React, { useState } from "react";
import axios from "axios";
import { Modal, Row, Col } from "react-bootstrap";
import Button from '../../components/micro/Button/Button'
import RegisterUserDataForm from "../../components/micro/Forms/Form/RegisterUserDataForm";
import RegisterAddressForm from "../../components/micro/Forms/Form/RegisterAddressForm";
import RegisterCreditCardForm from "../../components/micro/Forms/Form/RegisterCreditCardForm";

import './FormTest.css'


function FormTest(props) {
    const URL = 'http://localhost:3001/users';
    const [address, setAddress] = useState("");
    const [creditCard, setCreditCard] = useState("")
    const [showAddress, setShowAddress] = useState(false);
    const [showCreditCard, setShowCreditCard] = useState(false);


    const handleCloseAddress = () => setShowAddress(false);
    const handleShowAddress = () => setShowAddress(true);
    const handleCloseCreditCard = () => setShowCreditCard(false);
    const handleShowCreditCard = () => setShowCreditCard(true);



    const saveUser = (user) => {
        user = handleObject(user)
        axios.post(`${URL}`, user)
            .then(() => {
                console.log(user)
                setAddress("")
            })
    }

    const handleObject = (user) => {
        if (user.telephoneTemp !== "") {
            user = { ...user, telephones: [handleTelephoneCreation(user.telephoneTemp)] }
            delete user.telephoneTemp
        }

        if (address !== "") {
            user = { ...user, addresses: [{ ...address }] }
        }
        if (creditCard !== "") {
            user = { ...user, creditCards: [{ ...creditCard }] }
        }

        delete user.confirmPassword

        return user
    }

    const handleTelephoneCreation = (inputTelephone) => {
        let telArr = inputTelephone.split(") ")
        const ddd = telArr[0].slice(1)

        let numArr = telArr[1].split("-")
        const phoneNumber = numArr[0] + numArr[1]

        return { ddd, phoneNumber }
    }

    const handleAddress = (inputAddress) => {
        setAddress({ ...inputAddress })
    }

    const handleCreditCard = (inputCreditCard) => {
        setCreditCard({ ...inputCreditCard })
    }

    return (
        <>
            <RegisterUserDataForm save={saveUser} />
            <Col>
                <Row>
                    <Col className="text-center model-position">
                        <button class="btn-custom-default unsaved mb-2" onClick={handleShowAddress} >Cadastrar endereço</button>
                        <button class="btn-custom-default unsaved mx-3" onClick={handleShowCreditCard} >Cadastrar Cartão de Crédito</button>
                    </Col> 
                </Row>
            </Col>

            <Modal show={showAddress} onHide={handleCloseAddress} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Cadastrar endereço
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterAddressForm save={handleAddress} />
                </Modal.Body>
            </Modal>
            <Modal show={showCreditCard} onHide={handleCloseCreditCard} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Cadastrar cartão de crédito
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterCreditCardForm save={handleCreditCard} />
                </Modal.Body>
            </Modal>


        </>
    )
}

export default FormTest
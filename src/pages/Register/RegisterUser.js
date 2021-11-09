import React, { useState } from "react";
import axios from "axios";
import { Modal, Row, Col, Container } from "react-bootstrap";
import useRegisterFormat from "../../hooks/useRegisterFormat";
import RegisterUserDataForm from '../../components/macro/Forms/Register/RegisterUserDataForm'
import RegisterAddressForm from '../../components/macro/Forms/Register/RegisterAddressForm'
import RegisterCreditCardForm from '../../components/macro/Forms/Register/RegisterCreditCardForm'

import './RegisterUser.css'


function RegisterUser(props) {
    const URL = 'http://localhost:3001/users';
    const {
        handleAddressCreation,
        handleCreditCardCreation,
        handleGenderCreation,
        handleTelephoneCreation
    } = useRegisterFormat()

    const [address, setAddress] = useState("");
    const [creditCard, setCreditCard] = useState("")
    const [showAddress, setShowAddress] = useState(false);
    const [showCreditCard, setShowCreditCard] = useState(false);

    const savedAddress = address === "" ? false : true
    const savedCreditCard = creditCard === "" ? false : true

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
                setCreditCard("")
            })
    }

    const handleObject = (user) => {
        if (user.telephoneTemp !== "") {
            user = { ...user, telephones: [handleTelephoneCreation(user.telephoneTemp)] }
            delete user.telephoneTemp
        }

        if (user.genderTemp !== "") {
            user = { ...user, gender: handleGenderCreation(user.genderTemp) }
            delete user.genderTemp
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

    const handleAddress = (inputAddress) => {
        const formatedAddress = handleAddressCreation(inputAddress)
        setAddress({ ...formatedAddress })
        handleCloseAddress()
    }

    const handleCreditCard = (inputCreditCard) => {
        const formatedCreditCard = handleCreditCardCreation(inputCreditCard)
        setCreditCard({ ...formatedCreditCard })
        handleCloseCreditCard()
    }

    const cancelAddressRegister = () => {
        setAddress("")
        handleCloseAddress()
    }

    const cancelCreditCardRegister = () => {
        setCreditCard("")
        handleCloseCreditCard()
    }

    return (
        <>
            <RegisterUserDataForm save={saveUser} />
            <Col>
                <Row>
                    <Col className="text-center model-position">
                        <button className={"btn-custom-default mb-2 " + (savedAddress ? "saved" : "unsaved")} onClick={handleShowAddress} >{savedAddress ? "Alterar endereço" : "Cadastrar endereço"}</button>
                        <button className={"btn-custom-default mx-3 " + (savedCreditCard ? "saved" : "unsaved")} onClick={handleShowCreditCard} >{savedCreditCard ? "Alterar Cartão de Crédito" : "Cadastrar Cartão de Crédito"}</button>
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
                    <RegisterAddressForm save={handleAddress} alter={savedAddress ? address : ""} />
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <button className="btn-custom-default btn-cancelar2" onClick={cancelAddressRegister}>Cancelar cadastro</button>
                </Modal.Footer>
            </Modal>
            <Modal show={showCreditCard} onHide={handleCloseCreditCard} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Cadastrar cartão de crédito
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterCreditCardForm save={handleCreditCard} alter={savedCreditCard ? creditCard : ""} />
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <button className="btn-custom-default btn-cancelar2" onClick={cancelCreditCardRegister}>Cancelar cadastro</button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default RegisterUser
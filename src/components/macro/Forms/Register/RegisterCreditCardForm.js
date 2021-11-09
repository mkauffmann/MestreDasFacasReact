import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import cardValidator from 'card-validator'
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button";
import useValidation from "../../../../hooks/useValidation";



const initialInputValues = {
    cardNumber: "",
    cardValidDate: "",
    holderCpf: "",
    holderName: "",
    cardBrandTemp: ""
}

function RegisterCreditCardForm(props) {
    const [creditCardValues, setCreditCardValues] = useState(props.alter ? props.alter : { ...initialInputValues })
    const requiredFields = ["cardNumber", "holderCpf", "holderName", "cardBrandTemp", "cardValidDate"]
    const {
        validateForm,
        resetErrorStates,
        errors,
        validateStringNotEmpty,
        validateCpflNotEmpty,
        isEmpty,
        validateCreditCardDate
    } = useValidation(creditCardValues)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm(requiredFields)) {
            props.save(creditCardValues);
            setCreditCardValues({ ...initialInputValues });
        }
    }

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setCreditCardValues(prevValues => {
            return { ...prevValues, [name]: value }
        })
    }

    const resetForm = () => {
        setCreditCardValues({ ...initialInputValues })
        resetErrorStates()
    }

    const handleBlur = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;
        validationCallback(value, name)
        validateForm(requiredFields)
    }

    const handleBlurNumber = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;
        validationCallback(value, name)
        checkCardBrand()
    }

    const checkCardBrand = () => {
        let numberValidation = cardValidator.number(creditCardValues.cardNumber)

        if(numberValidation.isValid){
            setCreditCardValues(prevState => {
                return {
                    ...prevState,
                    cardBrandTemp : numberValidation.card.type.toUpperCase()
                }
            })
        }
        
    }

    return (
        <>
            <form onSubmit={handleSubmit} onReset={resetForm}>
                <Container className="mx-auto">
                    <Row>
                        <Col md={7} className="mb-3">
                            <Input type="text" id="cardNumber" name="cardNumber"
                                mask="9999 9999 9999 9999"
                                label="Cartão de crédito" obrigatorio
                                placeholder="Digite o número do cartão"
                                changeFunction={handleChange} value={creditCardValues.cardNumber}
                                blurFunction={handleBlurNumber} validation={isEmpty}
                                error={errors.cardNumber} />
                        </Col>
                        <Col md={2} className="mb-3">
                            <Input type="text" id="cardValidDate" name="cardValidDate"
                                mask="99/99" label="Validade" obrigatorio
                                changeFunction={handleChange} value={creditCardValues.cardValidDate}
                                blurFunction={handleBlur} validation={validateCreditCardDate}
                                error={errors.cardValidDate} />
                        </Col>
                        <Col md={3} className="mb-3">
                            <Input type="text" id="cardBrandTemp" name="cardBrandTemp"
                                    label="Bandeira" obrigatorio
                                    changeFunction={handleChange} value={creditCardValues.cardBrandTemp}
                                    blurFunction={handleBlur} validation={validateStringNotEmpty}
                                    error={errors.cardBrandTemp} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="mb-3">
                            <Input type="text" id="holderName" name="holderName"
                            label="Nome do titular" obrigatorio
                            changeFunction={handleChange} value={creditCardValues.holderName}
                            blurFunction={handleBlur} validation={validateStringNotEmpty}
                            error={errors.holderName} />
                        </Col>
                        <Col md={4} className="mb-3">
                            <Input type="text" id="holderCpf" name="holderCpf"
                                    label="CPF do titular" obrigatorio
                                    mask="999.999.999-99"
                                    changeFunction={handleChange} value={creditCardValues.holderCpf}
                                    blurFunction={handleBlur} validation={validateCpflNotEmpty}
                                    error={errors.holderCpf} />
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-end">
                    <Col className="d-flex justify-content-end">
                        <Button class="btn-cancelar mx-2" label="Limpar" type="reset" />
                        <Button class="btn-principal" label="Salvar" type="submit" />
                    </Col>
                </Row>
                </Container>
            </form>
        </>
    )
}

export default RegisterCreditCardForm
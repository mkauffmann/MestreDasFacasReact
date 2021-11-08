import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Input from "../Input/Input";
import Button from "../../Button/Button";
import useValidation from "../../../../hooks/useValidation";

const initialValue = {
    street: "",
    number: "",
    complement: "",
    cep: "",
    neighborhood: "",
    cityTemp: "",
    stateTemp: ""
}

function RegisterAddressForm(props) {
    const [addressValues, setAddressValues] = useState({ ...initialValue })
    const requiredFields = ["street", "number", "cep", "neighborhood", "cityTemp", "stateTemp"]
    const {
        validateForm,
        resetErrorStates,
        errors,
        validateStringNotEmpty,
        validateNotRequired,
        isEmpty,
        setErrors
    } = useValidation(addressValues);


    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm(requiredFields)) {
            props.save(addressValues);
            setAddressValues({ ...initialValue });
        }
    }

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setAddressValues(prevValues => {
            return { ...prevValues, [name]: value }
        })
    }

    const resetForm = () => {
        setAddressValues({ ...initialValue })
        resetErrorStates()
    }

    const handleBlur = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;
        validationCallback(value, name)
    }

    const handleBlurCep = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;
        validationCallback(value, name)
        handleCepApi()
    }

    const handleCepApi = () => {
        let cepArr = addressValues.cep.split("-")
        const inputCep = cepArr[0] + cepArr[1]
        console.log(inputCep)
        const url = `http://viacep.com.br/ws/${inputCep}/json/`
        axios.get(url)
            .then(response => {
                if (response.data.erro == true){
                    setErrors(prevState => {
                        return {
                            ...prevState,
                            cep: "Valor inválido"
                        }
                    })
                }
                setAddressValues(prevValues => {
                    return {
                        ...prevValues,
                        street: response.data.logradouro,
                        neighborhood: response.data.bairro,
                        cityTemp: response.data.localidade,
                        stateTemp: response.data.uf
                    }
                })
            })
            .catch(error => {
                console.log(error.message)
                setErrors(prevState => {
                    return {
                        ...prevState,
                        cep: "Valor inválido"
                    }
                })
            })


    }


    return (
        <form onSubmit={handleSubmit} onReset={resetForm}>
            <Col md={10} lg={8} className="mx-auto">
                <Row>
                    <Col md={6} className="mb-3">
                        <Input type="text" id="cep" name="cep"
                            mask="99999-999"
                            label="CEP" obrigatorio
                            placeholder="Digite seu CEP"
                            changeFunction={handleChange} value={addressValues.cep}
                            blurFunction={handleBlurCep} validation={isEmpty}
                            error={errors.cep} />
                    </Col>
                </Row>
                <Row>
                    <Col md={10} className="mb-3">
                        <Input type="text" id="street" name="street"
                            label="Logradouro" obrigatorio
                            placeholder="Rua, Avenida, etc."
                            changeFunction={handleChange} value={addressValues.street}
                            blurFunction={handleBlur} validation={validateStringNotEmpty}
                            error={errors.street} />
                    </Col>
                    <Col md={2} className="mb-3">
                        <Input type="text" id="number" name="number"
                            label="Número" obrigatorio
                            mask="999999" changeFunction={handleChange} value={addressValues.number}
                            blurFunction={handleBlur} validation={isEmpty}
                            error={errors.number} />
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-3">
                        <Input type="text" id="complement" name="complement"
                            label="Complemento" placeholder="Apartamento, Bloco, Casa (opcional)"
                            changeFunction={handleChange} value={addressValues.complement}
                            blurFunction={handleBlur} validation={validateNotRequired} />
                    </Col>
                </Row>
                <Row>
                    <Col md={5} className="mb-3">
                        <Input type="text" id="neighborhood" name="neighborhood"
                            label="Bairro" obrigatorio
                            changeFunction={handleChange} value={addressValues.neighborhood}
                            blurFunction={handleBlur} validation={validateStringNotEmpty}
                            error={errors.neighborhood} />
                    </Col>
                    <Col md={5} className="mb-3">
                        <Input type="text" id="city" name="cityTemp"
                            label="Cidade" obrigatorio
                            changeFunction={handleChange} value={addressValues.cityTemp}
                            blurFunction={handleBlur} validation={validateStringNotEmpty}
                            error={errors.cityTemp} />
                    </Col>
                    <Col md={2} className="mb-3">
                        <Input type="text" id="state" name="stateTemp"
                            label="UF" obrigatorio
                            mask="aa"
                            changeFunction={handleChange} value={addressValues.stateTemp}
                            blurFunction={handleBlur} validation={isEmpty}
                            error={errors.stateTemp} />
                    </Col>
                </Row>
                <Row className="my-3 justify-content-end">
                    <Col className="d-flex justify-content-end">
                        <Button class="btn-cancelar mx-2" label="Limpar" type="reset" />
                        <Button class="btn-principal" label="Salvar" type="submit" />
                    </Col>
                </Row>
            </Col>
        </form>
    )
}

export default RegisterAddressForm
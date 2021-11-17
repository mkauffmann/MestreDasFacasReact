import React, { useState } from "react";
<<<<<<< HEAD
import { Row, Col, Container } from "react-bootstrap";
=======
import { Row, Col, Container, Modal } from "react-bootstrap";
import ReactLoading from 'react-loading'
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
import axios from "axios";
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button";
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
    const [addressValues, setAddressValues] = useState(props.alter ? props.alter : { ...initialValue })
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
<<<<<<< HEAD


    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm(requiredFields)) {
            props.save(addressValues);
            setAddressValues({ ...initialValue });
        }
=======
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        if (await validateForm(requiredFields)) {
            if(await props.save(addressValues)){
                setAddressValues({ ...initialValue });
            }
        }
        setIsLoading(false)
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
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
        validateForm(requiredFields)
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
<<<<<<< HEAD
        console.log(inputCep)
=======
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
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
<<<<<<< HEAD
=======
        <>
        <Modal show={isLoading} animation={false} centered dialogClassName="modal-loading">
            <Modal.Body>
                <div>
                    <ReactLoading type={"spinningBubbles"} color="#860E1C" height={100} width={100} />
                </div>
            </Modal.Body>
        </Modal>
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
        <form onSubmit={handleSubmit} onReset={resetForm}>
            <Container className="mx-auto">
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
            </Container>
        </form>
<<<<<<< HEAD
=======
        </>
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
    )
}

export default RegisterAddressForm
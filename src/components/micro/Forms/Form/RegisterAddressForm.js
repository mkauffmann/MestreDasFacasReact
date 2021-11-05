import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Input from "../Input/Input";
import Button from "../../Button/Button";

const initialValue = {
    street: "",
    number: "",
    cep: "",
    neighborhood: "",
    city:
    {
        cityName: ""
    },
    state:
    {
        uf: ""
    }
}

function RegisterAddressForm(props) {
    const [addressValues, setAddressValues] = useState({ ...initialValue })
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            props.save(addressValues);
            setAddressValues({ ...initialValue });
            setErrors({});
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
        setErrors({})
    }

    const validateForm = () => {
        let isValid = true;

        return isValid;
    }

    return (
        <form onSubmit={handleSubmit} onReset={resetForm}>
            <Col>
                <Row>
                    <Col>
                        <Input type="text" id="street" name="street"
                            label="Logradouro" obrigatorio
                            placeholder="Rua, Avenida, etc."
                            changeFunction={handleChange} value={addressValues.street}
                            error={errors.street} />
                    </Col>
                </Row>
                <Row className="my-3 justify-content-end">
                    <Col className="d-flex justify-content-end">
                        <Button class="btn-cancelar mx-2" label="Limpar" type="reset" />
                        <Button class="btn-principal" label="Cadastrar" type="submit" />
                    </Col>
                </Row>
            </Col>
        </form>
    )
}

export default RegisterAddressForm
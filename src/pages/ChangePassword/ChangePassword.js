import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import useValidation from "../../hooks/useValidation";
import axios from "axios";
import { useParams, Route, Redirect } from "react-router";

import CardLogin from "../../components/micro/Login/CardLogin/CardLogin";
import Input from '../../components/micro/Forms/Input/Input'
import TitleLogin from "../../components/micro/Login/TitleLogin/TitleLogin";
import Button from '../../components/micro/Button/Button'

function ChangePassword(props) {
    let { id } = useParams()
    const URL = `http://localhost:8080/reset_password/`
    const initialValues = {
        password: "",
        confirmPassword: "",
        token: ""
    }
    const requiredFields = ["password", "confirmPassword"]
    const [inputValues, setInputValues] = useState({ ...initialValues })
    const [isSent, setIsSent] = useState(false)

    const { errors,
        validatePasswordNotEmpty,
        validateForm,
        resetErrorStates } = useValidation(inputValues)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm(requiredFields)) {
            axios.post(URL, { password: inputValues.password })
                .then((response) => {
                    if(response.status == 200){ //confirmar statusCode na integração final
                        resetForm()
                        setTimeout(() => setIsSent(true), 1000)
                    }
                })
                .catch(error => console.log(error))
        }
    };

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setInputValues((prevState) => {
            return { ...prevState, [name]: value };
        });
    };

    const handleBlur = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;
        validationCallback(value, name)
        validateForm(requiredFields)
    }

    const resetForm = () => {
        setInputValues({ ...initialValues });
        resetErrorStates();
    };

    return (
        <>
            <Container>
                <Row className="justify-content-center mb-5">
                    <CardLogin classes="forgot-password-card">
                        <TitleLogin title="Alterar senha" subtitle="Escolha sua nova senha" />
                        <form onSubmit={handleSubmit}>
                        <input type="hidden" name="token" value={inputValues.token} />
                            <div className="mb-3">
                                <Input type="password" id="senha" name="password" placeholder="Digite sua senha" label="Digite sua senha"
                                    obrigatorio changeFunction={handleChange}
                                    blurFunction={handleBlur} validation={validatePasswordNotEmpty}
                                    value={inputValues.password}
                                    error={errors.password} />
                            </div>
                            <div className="mb-3">
                                <Input type="password" id="confirmarSenha" name="confirmPassword" placeholder="Digite novamente sua senha" label="Confirme sua senha"
                                    obrigatorio changeFunction={handleChange} value={inputValues.confirmPassword} blurFunction={handleBlur} validation={validatePasswordNotEmpty}
                                    error={errors.confirmPassword} />
                            </div>
                            <div className="text-center">
                                <Button class="btn-principal" label="Enviar" />
                            </div>
                        </form>
                    </CardLogin>
                </Row>
            </Container>
            {isSent 
            ? <Redirect to="/" />
            : "" }
        </>
    )
}

export default ChangePassword
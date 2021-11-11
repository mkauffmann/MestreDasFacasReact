import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import CardLogin from "../../components/micro/Login/CardLogin/CardLogin";
import Input from '../../components/micro/Forms/Input/Input'
import TitleLogin from "../../components/micro/Login/TitleLogin/TitleLogin";
import Button from '../../components/micro/Button/Button'
import useValidation from '../../hooks/useValidation'
import DividingBar from "../../components/micro/Login/DividingBar/DividingBar";


function ForgotPassword(props) {
    const URL = 'http://localhost:3001/login';
    const requiredFields = ["email"]
    const [inputValues, setInputValues] = useState({email : ""}) 
    const [isSent, setIsSent] = useState(false)
    const { errors, 
        validateEmailNotEmpty, 
        validateForm, 
        resetErrorStates } = useValidation(inputValues)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm(requiredFields)) {
            axios.post(URL, inputValues)
            .then(() => {
                resetForm()
                setIsSent(true)
            })
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
        setInputValues({email : ""});
        resetErrorStates();
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <CardLogin classes="forgot-password-card">
                    <TitleLogin title="Esqueceu sua senha?" subtitle="Digite seu email abaixo" />
                    <form onSubmit={handleSubmit}>
                        <Input type="email" id="recoverEmail" name="email" label="Email"
                            placeholder="Digite o email associado à sua conta"
                            value={inputValues.email}
                            changeFunction={handleChange} blurFunction={handleBlur}
                            validation={validateEmailNotEmpty} error={errors.email}/>
                        <div className="mt-3 d-flex justify-content-end">
                            <Button navigation route='/login' class='mx-2 btn-cancelar' label='Voltar' />
                            <Button class="btn-principal" label="Enviar" />
                        </div>
                    </form>
                    {isSent 
                    ? <>
                        <DividingBar/>
                        <TitleLogin title="Email enviado" subtitle="Aguarde alguns minutos e confira sua caixa de entrada"/> 
                        </>
                    : ""}
                </CardLogin>
            </Row>
        </Container>
    )
}

export default ForgotPassword
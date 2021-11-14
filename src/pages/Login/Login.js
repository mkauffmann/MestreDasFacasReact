import React, { useState } from 'react'
import { Container, Row, Modal } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import ReactLoading from 'react-loading'
import axios from 'axios'
import useValidation from '../../hooks/useValidation'
import useLogin from '../../hooks/useLogin'
import './Login.css'
import Button from '../../components/micro/Button/Button'
import CardLogin from '../../components/micro/Login/CardLogin/CardLogin'
import DividingBar from '../../components/micro/Login/DividingBar/DividingBar'
import TitleLogin from '../../components/micro/Login/TitleLogin/TitleLogin'
import Input from '../../components/micro/Forms/Input/Input'

function Login(props) {
    const URL = 'http://localhost:8080/login';
    const initialValues = {
        email: "",
        password: ""
    }
    const requiredFields = ["email", "password"]
    const [inputValues, setInputValues] = useState({ ...initialValues })
    const [isSent, setIsSent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const { errors,
        validateEmailNotEmpty,
        isEmpty,
        validateForm,
        resetErrorStates,
        setErrors } = useValidation(inputValues)
    const {
        login
    } = useLogin()

    

    const handleSubmit = async (event) => {
        setIsLoading(true)
        event.preventDefault();

        if (validateForm(requiredFields)) {
            await axios.post(URL, inputValues)
                .then((response) => {
                    if (response.status == 200) {
                        login(response.data)
                        setErrorMessage("")
                        resetForm()
                        setIsSent(true)
                    }
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        setErrorMessage("Email e/ou senha incorreta")
                        setErrors({ password: " ", email: " " })
                    }
                })
        }
        setIsLoading(false)
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
            <Modal show={isLoading} animation={false} centered dialogClassName="modal-loading">
                <Modal.Body>
                    <div>
                        <ReactLoading type={"spinningBubbles"} color="#860E1C" height={100} width={100} />
                    </div>
                </Modal.Body>
            </Modal>
            <Container>
                <Row className="justify-content-center mb-5">
                    <CardLogin classes="">
                        <TitleLogin title="Faça login" subtitle="Já é nosso cliente?" />
                        {errorMessage == ""
                            ? ""
                            : <TitleLogin title={errorMessage} />}
                        <form className="inputs-login d-flex flex-column" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <Input type="email" id="loginEmail" name="email" label="Email"
                                    placeholder="Digite seu email"
                                    value={inputValues.email}
                                    changeFunction={handleChange} blurFunction={handleBlur}
                                    validation={validateEmailNotEmpty} error={errors.email} />
                            </div>
                            <div className="mb-3">
                                <Input type="password" id="loginSenha" name="password" placeholder="Digite sua senha" label="Senha"
                                    changeFunction={handleChange}
                                    blurFunction={handleBlur} validation={isEmpty}
                                    value={inputValues.password}
                                    error={errors.password} />
                            </div>
                            <Button class={'btn-principal align-self-center btn-login'} label={'Entrar'} />
                            <Link to="/forgotPassword" className="align-self-center mt-2" >Esqueci minha senha</Link>
                        </form>
                        <DividingBar label="ou" />
                        <TitleLogin title="Crie uma conta" subtitle="Ainda não é nosso cliente?" >
                            <Button navigation route='/register' class={'btn-cancelar'} label={'Cadastre-se'} />
                        </TitleLogin>
                    </CardLogin>
                </Row>
            </Container>
            {isSent
                ? <Redirect to="/"/>
                : ""}
        </>
    )
}

export default Login
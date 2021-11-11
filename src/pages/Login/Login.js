import React, { useEffect } from 'react'
import { Form, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Login.css'
import Button from '../../components/micro/Button/Button'
import CardLogin from '../../components/micro/Login/CardLogin/CardLogin'
import DividingBar from '../../components/micro/Login/DividingBar/DividingBar'
import TitleLogin from '../../components/micro/Login/TitleLogin/TitleLogin'


function Login(props) {

    return (
        <>
            <Container>
                <Row className="justify-content-center mb-5">
                    <CardLogin classes="login-card">
                        <TitleLogin title="Faça login" subtitle="Já é nosso cliente?" />
                        <Form className="inputs-login d-flex flex-column">
                            <Form.Group controlId="email" className="mb-1">
                                <Form.Label className="custom-label">Email</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" id="email" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="custom-label">Senha</Form.Label>
                                <Form.Control type="text" id="senha" placeholder="Digite sua senha" required />
                            </Form.Group>
                            <Button class={'btn-principal align-self-center btn-login'} label={'Entrar'} />
                            <Link to="/forgotPassword" className="align-self-center mt-2" >Esqueci minha senha</Link>
                        </Form>
                        <DividingBar label="ou" />
                        <TitleLogin title="Crie uma conta" subtitle="Ainda não é nosso cliente?" >
                            <Button navigation route='/register' class={'btn-cancelar'} label={'Cadastre-se'} />
                        </TitleLogin>
                    </CardLogin>
                </Row>
            </Container>
        </>
    )
}

export default Login
import React, { useEffect }  from 'react'
import { Form, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Login.css'
import Button from '../../components/micro/Button/Button'

function Login(props) {

    return(
        <>
        <Container>
            <Row className="justify-content-center">
                    <div className="col-12 col-md-6 col-lg-5 login-card">
                        {/* <!-- TITULO LOGIN START  --> */}
                        <div className="login-titulo text-center mt-3">
                            <h3>Faça login</h3>
                            <p>Já é nosso cliente?</p>
                        </div>
                    {/* <!-- TITULO LOGIN END  -->
                    <!-- INPUTS LOGIN START  --> */}
                    <Form className="inputs-login d-flex flex-column">
                        <Form.Group controlId="email" className="mb-1">
                            <Form.Label className="custom-label">Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email" id="email" required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="custom-label">Senha</Form.Label>
                            <Form.Control type="text" id="senha" placeholder="Digite sua senha" required/>
                        </Form.Group>
                        <Button class={'btn-principal align-self-center btn-login'} label={'Entrar'}/>
                        <Link to="/" className="align-self-center mt-2" >Esqueci minha senha</Link>
                    </Form>
                    {/* <!-- INPUTS LOGIN END  -->

                    <!-- BARRA/OU START  --> */}

                    <div className="divisao row my-3">
                        <div className="col-5"><hr/></div>
                        <div className="col-2 text-center">ou</div>
                        <div className="col-5"><hr/></div>
                    </div>
                    {/* <!-- BARRA/OU END  --> */}

                    <div className="cadastro d-flex flex-column align-items-center mt-3">
                        {/* <!-- TITULO CADASTRO START  --> */}
                        <div className="login-titulo text-center">
                            <h3>Crie uma conta</h3>
                            <p>Ainda não é nosso cliente?</p>
                        </div>
                        {/* <!-- TITULO CADASTRO END  --> */}
                        <Button navigation route='/register' class={'btn-cancelar'} label={'Cadastre-se'}/>
                    </div>
                </div>
            </Row>
        </Container>
        </>
    )
}

export default Login
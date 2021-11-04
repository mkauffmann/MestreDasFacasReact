import React from 'react'
import { Container, Row, Form, Col, Accordion } from 'react-bootstrap'
import Button from '../../components/micro/Button/Button'
import Input from '../../components/micro/Forms/Input/Input'
import './Register.css'

function Register(props) {

    return(
        <>
        <Container>
            <div className="col-12 text-center mb-3 mt-5">
                <h1 className="h1">Criar novo cadastro</h1>
            </div>
            <Form >
                <Input />
                <Col md={10} lg={8} className="mx-auto">
                    <Row className="mb-3">
                        <Form.Group controlId="nome">
                            <Form.Label className="custom-label">Nome completo<span className="obrigatorio">*</span></Form.Label>
                            <Form.Control type="text" id="nome" placeholder="Digite seu nome" required/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group controlId="email">
                            <Form.Label className="custom-label">Email<span className="obrigatorio">*</span></Form.Label>
                            <Form.Control type="email" id="email" placeholder="Digite seu email" required/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="cpf">
                                <Form.Label className="custom-label">CPF<span className="obrigatorio">*</span></Form.Label>
                                <Form.Control type="text" id="cpf" placeholder="Digite seu CPF" required/>
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="data-nascimento">
                                <Form.Label className="custom-label">Data de nascimento</Form.Label>
                                <Form.Control type="date" id="data-nascimento" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="telefone">
                                <Form.Label className="custom-label">Telefone</Form.Label>
                                <Form.Control type="tel" id="telefone" placeholder="(XX) XXXXX-XXXX"/>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input custom-check" id="whatsapp"/>
                                    <label className="form-check-label label-check-custom" for="whatsapp">Receber notificações por Whatsapp</label>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="genero">
                                <Form.Label className="custom-label">Gênero</Form.Label>
                                <Form.Select id="genero">
                                    <option value="" selected disabled>Selecione</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="nao-binario">Não Binário</option>
                                    <option value="outro">Outros</option>
                                    <option value="nd">Prefiro não dizer</option>
                                </Form.Select>
                            </Form.Group>
                            
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="senha">
                                <Form.Label className="custom-label">Digite sua senha<span className="obrigatorio">*</span></Form.Label>
                                <Form.Control type="password" id="senha" placeholder="Digite sua senha" required/>
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="confirmar-senha">
                                <Form.Label className="custom-label">Confirme sua senha<span className="obrigatorio">*</span></Form.Label>
                                <Form.Control type="password" id="confirmar-senha" placeholder="Digite novamente sua senha" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Accordion className="my-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Cadastrar Endereço</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="street">
                                            <Form.Label className="custom-label">Logradouro</Form.Label>
                                            <Form.Control type="text" id="street" placeholder="Digite seu logradouro"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Cadastrar Cartão de Crédito</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Row>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input custom-check" id="promocao" checked/>
                                    <label className="form-check-label label-check-custom" for="promocao">Aceito receber e-mails promocionais</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input custom-check" id="whatsapp"/>
                                    <label className="form-check-label label-check-custom" for="whatsapp">Li e concordo com a <b>Política de Privacidade</b></label>
                                </div>
                                <p className="mt-3"><span className="obrigatorio">*</span>Campos obrigatórios</p>
                            </div>
                        </div>
                    </Row>
                    <Row className="my-3 justify-content-end">
                        <Col className="d-flex justify-content-end">
                            <Button class="btn-cancelar mx-2" label="Limpar"/>
                            <Button class="btn-principal" label="Cadastrar"/>
                        </Col>  
                    </Row>
                </Col>
            </Form>
        </Container>
        </>
    )
}

export default Register
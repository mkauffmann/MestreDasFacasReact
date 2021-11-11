import React from "react";
import { Container, Row } from "react-bootstrap";
import CardLogin from "../../components/micro/Login/CardLogin/CardLogin";
import Input from '../../components/micro/Forms/Input/Input'
import TitleLogin from "../../components/micro/Login/TitleLogin/TitleLogin";
import Button from '../../components/micro/Button/Button'


function ForgotPassword(props) {
    return (
        <Container>
            <Row className="justify-content-center">
                <CardLogin>
                    <TitleLogin title="Esqueceu sua senha?" subtitle="Digite seu email abaixo" />
                    <form>
                        <Input type="email" id="recoverEmail" name="email" label="Email"
                            placeholder="Digite o email associado à sua conta" />
                        <div className="mt-3 d-flex justify-content-end">
                            <Button class="btn-principal" label="Enviar" />
                        </div>
                    </form>
                </CardLogin>
            </Row>
        </Container>
    )
}

export default ForgotPassword
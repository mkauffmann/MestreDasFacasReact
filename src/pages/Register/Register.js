import React from 'react'
import { Container} from 'react-bootstrap'
import RegisterUser from './RegisterUser'
import './Register.css'

function Register(props) {

    return(
        <>
        <Container>
            <div className="col-12 text-center mb-3 mt-5">
                <h1 className="h1">Criar novo cadastro</h1>
            </div>
            <RegisterUser/>
        </Container>
        </>
    )
}

export default Register
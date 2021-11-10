import React from 'react'
import './Login.css'

import Button from '../../components/micro/Button/Button'

function Login(props) {

    return(
        <>
        <Button navigation route='home' label='principal' class='btn-cancelar'/>
        <Button label='principal' class='btn-principal'/>
        <Button label='cancelar' class='btn-cancelar'/>
        </>
    )
}

export default Login
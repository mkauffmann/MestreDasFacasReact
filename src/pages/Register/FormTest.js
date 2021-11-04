import React, { useState } from "react";
import axios from "axios";
import RegisterForm from "../../components/micro/Forms/Form/RegisterForm";


function FormTest(props){
    const URL = 'http://localhost:3001/users';

    const saveUser = (user) => {
        axios.post(`${URL}`, user)
        .then(console.log(user))
    }

    return (
        <RegisterForm save={saveUser}/>
    )
}

export default FormTest
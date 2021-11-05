import React, { useState } from "react";
import axios from "axios";
import RegisterForm from "../../components/micro/Forms/Form/RegisterForm";


function FormTest(props) {
    const URL = 'http://localhost:3001/users';

    const saveUser = (user) => {
        user = handleObject(user)
        axios.post(`${URL}`, user)
            .then(console.log(user))
    }

    const handleObject = (user) => {
        if(user.telephoneTemp != ""){
            user = {...user, telephones: [handleTelephoneCreation(user.telephoneTemp)]}
            delete user.telephoneTemp
        }

        delete user.confirmPassword

        return user
    }

    const handleTelephoneCreation = (inputTelephone) => {
        let telArr = inputTelephone.split(") ")
        const ddd = telArr[0].slice(1)

        let numArr = telArr[1].split("-")
        const phoneNumber = numArr[0] + numArr[1]

        return {ddd, phoneNumber}
    }

    return (
        <RegisterForm save={saveUser} />
    )
}

export default FormTest
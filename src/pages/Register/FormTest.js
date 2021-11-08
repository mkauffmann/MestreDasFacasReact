import React, { useState } from "react";
import axios from "axios";
import RegisterForm from "../../components/micro/Forms/Form/RegisterForm";
import RegisterAddressForm from "../../components/micro/Forms/Form/RegisterAddressForm";



function FormTest(props) {
    const URL = 'http://localhost:3001/users';
    const [address, setAddress] = useState("");


    const saveUser = (user) => {
        user = handleObject(user)
        axios.post(`${URL}`, user)
            .then(() => {
                console.log(user)
                setAddress("")
            })
    }

    const handleObject = (user) => {
        if(user.telephoneTemp !== ""){
            user = {...user, telephones: [handleTelephoneCreation(user.telephoneTemp)]}
            delete user.telephoneTemp
        }

        if(address !== ""){
            user = {...user, addresses : [{...address}]}
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

    const handleAddress = (inputAddress) => {
        setAddress({...inputAddress})
    }

    return (
        <>
        <RegisterForm save={saveUser} />
        <RegisterAddressForm save={handleAddress} />
        </>
    )
}

export default FormTest
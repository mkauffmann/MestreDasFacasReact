import React, { useState } from "react";
import axios from "axios";
import RegisterUserDataForm from "../../components/micro/Forms/Form/RegisterUserDataForm";
import RegisterAddressForm from "../../components/micro/Forms/Form/RegisterAddressForm";
import RegisterCreditCardForm from "../../components/micro/Forms/Form/RegisterCreditCardForm";



function FormTest(props) {
    const URL = 'http://localhost:3001/users';
    const [address, setAddress] = useState("");
    const [creditCard, setCreditCard] = useState("")


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
        if(creditCard !== ""){
            user = {...user, creditCards : [{...creditCard}]}
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

    const handleCreditCard = (inputCreditCard) => {
        setCreditCard({...inputCreditCard})
    }

    return (
        <>
        <RegisterUserDataForm save={saveUser} />
        <RegisterAddressForm save={handleAddress} />
        <RegisterCreditCardForm save={handleCreditCard} />
        </>
    )
}

export default FormTest
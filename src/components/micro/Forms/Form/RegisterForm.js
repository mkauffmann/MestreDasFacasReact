import React, { useState } from "react";
import Input from "../Input/Input";


const initialInputValues = {
    "name" : "",
    "email" : ""
}

function RegisterForm(props){
    const [inputValues, setInputValues] = useState({...initialInputValues})
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.save(inputValues)
        setInputValues({...initialInputValues})
    }

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setInputValues({
            ...inputValues,
            [name] : value
        })
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input type="text"
                        id="name"
                        name="name"
                        changeFunction={handleChange}
                        value={inputValues.name}
                        />
                <Input type="email"
                        id="email"
                        name="email"
                        changeFunction={handleChange}
                        value={inputValues.email}
                        />
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default RegisterForm
import { useState } from "react";


function useValidation(inputValues) {
    const initialValidState = createInitialValidState(inputValues)

    const [validInput, setValidInput] = useState({ ...initialValidState })
    const [errors, setErrors] = useState({});

    function createInitialValidState(values) {
        let newObj = {}
        for (const input in values) {
            newObj[input] = null
        }
        return newObj
    }

    const resetErrorStates = () => {
        setValidInput({...initialValidState})
        setErrors({})
    }

    const isEmpty = (inputValue, name) => {
        if (inputValue.trim() === "") {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: "Campo obrigatório"
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })

            return true

        } else {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: ""
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: true
                }
            })

            return false
        }
    }

    const validateStringNotEmpty = (inputValue, name) => {
        const regexName =
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s,.'-]{1,}$/u;

        if (!isEmpty(inputValue, name) && !regexName.test(inputValue)) {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: "Caracteres inválidos"
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        }
    }

    const validateEmailNotEmpty = (inputValue, name) => {
        const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (!isEmpty(inputValue, name) && !regexEmail.test(inputValue)) {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: "Email inválido"
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        }
    }

    const validateCpflNotEmpty = (inputValue, name) => {
        const regexCpf = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/g;

        if (!isEmpty(inputValue, name) && !regexCpf.test(inputValue)) {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: "CPF inválido"
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        }
    }

    const validateTelephoneEmpty = (inputValue, name) => {
        if (inputValue !== "" && inputValue.length < 15) {
            setErrors((prevState) => {
                return { ...prevState, [name]: "Celular inválido" }
            })
            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        } else {
            validateNotRequired(inputValue, name)
        }
    }

    const validatePasswordNotEmpty = (inputValue, name) => {
        if (!isEmpty(inputValue, name) && inputValues.password !== inputValues.confirmPassword) {
            setErrors((prevState) => {
                return { ...prevState, confirmPassword: "Senhas digitadas não conferem" }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    confirmPassword: false
                }
            })
        } else {
            setValidInput((prevState) => {
                return {
                    ...prevState,
                    confirmPassword: true
                }
            })
            setErrors((prevState) => {
                return { ...prevState, confirmPassword: "" }
            })
        }
    }

    const validateNotRequired = (inputValue, name) => {
        setErrors((prevState) => {
            return { ...prevState, [name]: "" }
        })

        setValidInput((prevState) => {
            return {
                ...prevState,
                [name]: true
            }
        })
    }

    const validateForm = (requiredFields) => {
        let formIsValid = true

        for (const key in validInput){
            if (validInput[key] === null){
                if(requiredFields.includes(key)){
                    isEmpty(inputValues[key], key)
                    formIsValid = false
                }
            } else if (validInput[key] === false){
                formIsValid = false
            }
        }
        
       return formIsValid
    };

    return {
        validateForm,
        resetErrorStates,
        errors, validInput,
        isEmpty,
        validateStringNotEmpty,
        validateEmailNotEmpty,
        validateCpflNotEmpty,
        validateTelephoneEmpty,
        validateNotRequired,
        validatePasswordNotEmpty
    }
}

export default useValidation
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Row, Col} from "react-bootstrap";
=======
import React, { useState } from "react";
import { Row, Col} from "react-bootstrap";

>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
import Button from "../../../micro/Button/Button";
import Input from "../../../micro/Forms/Input/Input";
import Select from "../../../micro/Forms/Select/Select";
import useValidation from "../../../../hooks/useValidation";
<<<<<<< HEAD
import useRegisterFormat from "../../../../hooks/useRegisterFormat";

function UpdateUserDataForm(props) {
    const {handleShowGender} = useRegisterFormat()
    const [inputValues, setInputValues] = useState({ ...props.userData});
    const {
        errors
    } = useValidation(inputValues)

    
    const convertGender = () => {
        setInputValues(prevValues => {
            return {
                ...prevValues,
                genderTemp : handleShowGender(inputValues)
            }
        })
        console.log(inputValues)
    }

    useEffect(convertGender, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (true) {
            props.save(inputValues);
        }
    };
=======


function UpdateUserDataForm(props) {
    const [inputValues, setInputValues] = useState({ ...props.userData});
    const {
        errors,
        validateForm,
        validateStringNotEmpty,
        validateEmailNotEmpty,
        setErrors
    } = useValidation(inputValues)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (await validateForm(["name", "email"])) {
            props.updateUser(inputValues);
    
        }
    }; 
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setInputValues((prevState) => {
            return { ...prevState, [name]: value };
        });
    };

<<<<<<< HEAD
    // const handleBlur = (event, validationCallback) => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     validationCallback(value, name)
    //     validateForm(requiredFields)
    // }
=======
    const handleChangeGender = (event) => {
        const value = event.target.value;

        setInputValues((prevState) => {
            return { ...prevState, gender: {description : value} };
        });
    };

    const handleBlur = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;
        validationCallback(value, name)
        validateForm([])
    }
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858

    // const resetForm = () => {
    //     setInputValues({ ...initialInputValues });
    //     resetErrorStates();
    // };

    return (
        <>
            <form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                label="Nome completo"
                                placeholder="Digite seu nome"
                                changeFunction={handleChange}
<<<<<<< HEAD
=======
                                blurFunction={handleBlur}
                                validation={validateStringNotEmpty}
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
                                value={inputValues.name}
                                error={errors.name}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                label="Email"
                                placeholder="Digite seu email"
                                changeFunction={handleChange}
<<<<<<< HEAD
=======
                                blurFunction={handleBlur}
                                validation={validateEmailNotEmpty}
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
                                value={inputValues.email}
                                error={errors.email}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="mb-3">
                            <Input
                                type="text"
                                id="cpf"
                                name="cpf"
                                label="CPF"
                                disabled
                                value={inputValues.cpf}
                                error={errors.cpf}
                                mask="999.999.999-99"
                            />
                        </Col>
                        <Col md={4} className="mb-3">
                            <Input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                label="Data de nascimento"
                                changeFunction={handleChange}
                                value={inputValues.birthDate}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Select id="gender" name="genderTemp" label="Gênero"
                                options={["Feminino", "Masculino", "Não-binário", "Outros", "Prefiro não dizer"]}
<<<<<<< HEAD
                                changeFunction={handleChange} 
                                update
                                value={inputValues.genderTemp} />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <div className="mb-3"><h4>Trocar de Senha</h4></div>
                        <Col md={6} className="mb-3">
                            <Input type="password" id="senha" name="prevPassword" placeholder="Digite sua senha atual" label="Digite sua senha atual"
                                    obrigatorio changeFunction={handleChange} 
                                    value={inputValues.prevPassword}
                                    error={errors.password}/>
                        </Col>
                        <Col md={6} className="mb-3"></Col>
                        <Col md={6} className="mb-3">
                            <Input type="password" id="senha" name="password" placeholder="Digite sua nova senha" label="Digite sua nova senha"
                                    obrigatorio changeFunction={handleChange} 
                                    value={inputValues.password}
                                    error={errors.password}/>
                        </Col>
                        <Col md={6} className="mb-3">
                        <Input type="password" id="confirmarSenha" name="confirmPassword" placeholder="Digite novamente sua nova senha" label="Confirme sua nova senha"
                                    obrigatorio changeFunction={handleChange} value={inputValues.confirmPassword}
                                    error={errors.confirmPassword}/>
=======
                                changeFunction={handleChangeGender} 
                                update
                                value={inputValues.gender ? inputValues.gender.description : ""} />
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
                        </Col>
                    </Row>
                    <Row className="justify-content-end">
                        <Col className="d-flex justify-content-end">
<<<<<<< HEAD
                            <Button class="btn-principal" label="Atualizar" type="submit" />
=======
                            <Button class="btn-principal" label="Atualizar dados pessoais" type="submit" />
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
                        </Col>
                    </Row>
            </form>
        </>
    );
}

export default UpdateUserDataForm

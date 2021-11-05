import React, { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Button from "../../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";

const initialInputValues = {
    name: "",
    email: "",
    cpf: "",
    birthDate: "",
    gender: {}
};

function RegisterForm(props) {
    const [inputValues, setInputValues] = useState({ ...initialInputValues });
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            props.save(inputValues);
            setInputValues({ ...initialInputValues });
            setErrors({});
        }
        console.log(errors);
    };

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setInputValues((prevState) => {
            return { ...prevState, [name]: value };
        });
    };

    const handleChangeGender = (event) => {
        const value = event.target.value

        setInputValues((prevState) => {
            return { ...prevState, gender: { description: value } }
        })
    }

    const resetForm = () => {
        setInputValues({ ...initialInputValues });
        setErrors({});
    };

    const validateForm = () => {
        let isValid = true;
        let nameIsValid = true;
        let emailIsValid = true;
        let cpfIsValid = true;

        const regexName =
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s,.'-]{1,}$/u;

        const regexCpf = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/g;
        
        /*
        VALIDACAO NOME 
         */
        if (!regexName.test(inputValues.name)) {
            setErrors((prevState) => {
                return { ...prevState, name: "Caracteres inválidos" };
            });

            isValid = false;
            nameIsValid = false;
        }

        if (inputValues.name == "") {
            setErrors((prevState) => {
                return { ...prevState, name: "Nome é um campo obrigatório" };
            });
            isValid = false;
            nameIsValid = false;
        }

        if (nameIsValid) {
            setErrors((prevState) => {
                return { ...prevState, name: "" }; //limpar mensagem de erro
            });
        }

        /*
        VALIDACAO EMAIL 
         */
        if (inputValues.email == "") {
            setErrors((prevState) => {
                return { ...prevState, email: "Email é um campo obrigatório" };
            });
            isValid = false;
            emailIsValid = false;
        }

        if (emailIsValid) {
            setErrors((prevState) => {
                return { ...prevState, email: "" }; //limpar mensagem de erro
            });
        }

        /*
        VALIDACAO CPF 
         */
        if (!regexCpf.test(inputValues.cpf)) {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    cpf: "CPF inválido",
                };
            });
            isValid = false;
            cpfIsValid = false;
        }
        if (inputValues.cpf == "") {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    cpf: "CPF é um campo obrigatório",
                };
            });
            isValid = false;
            cpfIsValid = false;
        }
        if (cpfIsValid) {
            setErrors((prevState) => {
                return { ...prevState, cpf: "" };
            });
        }

        return isValid;
    };

    return (
        <>
            <form onSubmit={handleSubmit} onReset={resetForm}>
                <Col md={10} lg={8} className="mx-auto">
                    <Row className="mb-3">
                        <Col>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                label="Nome completo"
                                placeholder="Digite seu nome"
                                obrigatorio
                                changeFunction={handleChange}
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
                                obrigatorio
                                changeFunction={handleChange}
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
                                placeholder="Digite seu CPF"
                                name="cpf"
                                label="CPF"
                                obrigatorio
                                changeFunction={handleChange}
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
                        {/* <Col md={6} className="mb-3">
              <Input type="tel" id="telephone" placeholder="(XX) XXXXX-XXXX"/>
          </Col> */}
                        <Col md={6} className="mb-3">
                            <Select id="gender" name="gender" label="Gênero"
                                options={["Feminino", "Masculino", "Não-binário", "Outros", "Prefiro não dizer"]}
                                changeFunction={handleChangeGender}
                                value={inputValues.gender.description} />
                        </Col>
                    </Row>

                    <Row className="my-3 justify-content-end">
                        <Col className="d-flex justify-content-end">
                            <Button class="btn-cancelar mx-2" label="Limpar" type="reset" />
                            <Button class="btn-principal" label="Cadastrar" type="submit" />
                        </Col>
                    </Row>
                </Col>
            </form>
        </>
    );
}

export default RegisterForm;

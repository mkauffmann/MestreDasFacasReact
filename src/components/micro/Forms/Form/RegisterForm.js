import React, { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Button from "../../Button/Button";
import Input from "../Input/Input";

const initialInputValues = {
  name: "",
  email: "",
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

  const validateForm = () => {
    const regexName =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s,.'-]{1,}$/u;
    
     //name
    if (inputValues.name == "") {
      setErrors((prevState) => {
        return { ...prevState, name: "Nome é um campo obrigatório" };
      });
      return false;
    }
    if (!regexName.test(inputValues.name)) {
      setErrors((prevState) => {
        return { ...prevState, name: "Caracteres inválidos" };
      });
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setInputValues({ ...initialInputValues });
    setErrors({});
  };

  return (
    <>
      <form onSubmit={handleSubmit} onReset={resetForm}>
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
        <Input
          type="email"
          id="email"
          name="email"
          label="Email"
          placeholder="Digite seu email"
          obrigatorio
          changeFunction={handleChange}
          value={inputValues.email}
        />
        <Row className="my-3 justify-content-end">
          <Col className="d-flex justify-content-end">
            <Button class="btn-cancelar mx-2" label="Limpar" type="reset" />
            <Button class="btn-principal" label="Cadastrar" type="submit" />
          </Col>
        </Row>
      </form>
    </>
  );
}

export default RegisterForm;

import React from "react";
import Label from "../Label/Label";
import "./Select.css";

function Select(props) {
    const renderOptions = () => {
        return props.options.map((option, index) => {
            return (
                <option key={index} value={option}>
                    {option}
                </option>
            );
        });
    };

    return (
        <>
            <Label
                label={props.label}
                obrigatorio={props.obrigatorio}
                id={props.id}
            />
            <select
                id={props.id}
                className="form-select"
                onChange={(event) => props.changeFunction(event)}
            >
                <option value="" selected disabled> Selecione </option>
                {renderOptions()}
            </select>
        </>
    );
}

export default Select;

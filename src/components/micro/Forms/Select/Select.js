import React from "react";
import Label from "../Label/Label";
import "./Select.css";

function Select(props) {
    const renderOptions = (update) => {
        if (update) {
            return props.options.map((option, index) => {
                return (
                    <option key={index + 1} value={option} selected={option.toUpperCase() === props.value ? true : false}>
                        {option}
                    </option>
                );
            });
        } else {
            return props.options.map((option, index) => {
                return (
                    <option key={index + 1} value={option}>
                        {option}
                    </option>
                );
            });
        }
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
                name={props.name}
                className="form-select"
                onChange={(event) => props.changeFunction(event)}
            >
                <option value="" key={0} defaultValue> Selecione </option>
                {renderOptions(props.update)}
            </select>
        </>
    );
}

export default Select;

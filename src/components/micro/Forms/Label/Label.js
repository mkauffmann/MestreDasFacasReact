import React from "react";

import './Label.css'

function Label(props){
    return (
        <label className="custom-label">
            {props.label}{props.obrigatorio ? <span className="obrigatorio">*</span> : ''}
        </label>
    )
}

export default Label

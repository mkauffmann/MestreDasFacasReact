import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import './Input.css'

function Input(props) {

    const masks = {
        creditCard: "9999 9999 9999 9999", 
        name: [/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s,.'-]{1,}$/u]

    }
    

    return(
        <>
        <ReactInputMask mask={masks.name}
                        maskChar={null}
                        type={props.type} 
                        id={props.id}
                        name={props.name} 
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={(event) => {props.changeFunction(event)}}
                        className="form-control" />
        </>
    )
}

export default Input
import React from "react"
import Button from '../../../micro/Button/Button'
import InfoItem from "./InfoItem/InfoItem"

import './InfoList.css'

function InfoList(props){
    return (
        <>
            <div className="col-12 d-flex justify-content-between mb-4">
                <h3>{props.type == 'card' ? 'Meus Cartões' : 'Meus Endereços'}</h3>
                <Button class="btn-principal" label={props.type == 'card' ? 'Adicionar cartão' : 'Adicionar endereço'}/>
            </div>
            <InfoItem type={props.type}/>
        </>
    )
}

export default InfoList
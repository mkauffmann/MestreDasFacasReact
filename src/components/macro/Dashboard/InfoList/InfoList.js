<<<<<<< HEAD
import React, { useState } from "react"
=======
import React from "react"
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
import InfoItem from "./InfoItem/InfoItem"

import './InfoList.css'

function InfoList(props) {
<<<<<<< HEAD

=======
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
    const renderList = (array) => {
        let items = []
        for(let i = 0; i < array.length; i++){
            items.push(<InfoItem obj={array[i]} key={i} type={props.type}/>)
        }
        return items
    }

    if (props.isLoading) {
        return <p>Loading...</p>
    }

    const chooseType = (type) => {
        switch(type){
            case 'cartão':
                return renderList(props.userData.creditCards)
            case 'endereço':
                return renderList(props.userData.addresses)
            case 'telefone' :
                return renderList(props.userData.telephones)
            default:
                return ""
        }
    }

    return (
        <>
<<<<<<< HEAD
            <div className="col-12 d-flex justify-content-between mb-4">
                <h3>{props.title}</h3>
                <button class="btn-custom-default btn-principal"> Adicionar {props.type}</button>
            </div>

=======
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
            {chooseType(props.type)}
        </>
    )
}

export default InfoList
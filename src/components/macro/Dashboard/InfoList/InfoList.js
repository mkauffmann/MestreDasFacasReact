import React from "react"
import InfoItem from "./InfoItem/InfoItem"

import './InfoList.css'

function InfoList(props) {

    const renderList = (array) => {
        let items = []
        for(let i = 0; i < array.length; i++){
            items.push(<InfoItem obj={array[i]} key={i}/>)
        }
        return items
    }

    if (props.isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div className="col-12 d-flex justify-content-between mb-4">
                <h3>{props.title}</h3>
                <button class="btn-custom-default btn-principal"> Adicionar {props.tipo}</button>
            </div>

            {renderList(props.userData.creditCards)}
        </>
    )
}

export default InfoList
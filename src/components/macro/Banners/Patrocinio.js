import React from 'react'
import './Patrocinio.css'

function Patrocinio(props) {
    return (
        <>
            <div class="container d-flex banner1">
                <div class="container col-6">
                    <img src={props.imagem} class="d-block w-100 patrocinio" />
                </div>
                <div class="container col-6">
                    <img src={props.imagem}  class="d-block w-100 patrocinio" />
                </div>
            </div>
        </>
    );
}

export default Patrocinio

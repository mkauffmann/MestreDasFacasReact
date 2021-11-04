import React from 'react'
import Patrocinador from '../../../assets/imgs/banners/patrocinador.png'
import './Patrocinio.css'

function Patrocinio(props) {
    return (
        <>
            <div class="container d-flex banner1">
                <div class="container col-6">
                    <img src={Patrocinador} style={{ height: '7vw' }} class="d-block w-100" />
                </div>
                <div class="container col-6">
                    <img src={Patrocinador} style={{ height: '7vw' }} class="d-block w-100" />
                </div>
            </div>
        </>
    );
}

export default Patrocinio

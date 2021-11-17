import React, {useEffect, useState} from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

import './Category.css'

import Button from '../../components/micro/Button/Button'
import '../../components/micro/Button/Button.css'

import Card from '../../components/macro/CardHome/Card'
import '../../components/macro/CardHome/Card.css'

// import SearchBar from '../../components/macro/Forms/SearchBar/SearchBar'

import Faca2 from '../../assets/imgs/produtos/2.jpeg'
import Faca3 from '../../assets/imgs/produtos/3.jpeg'
import Faca24 from '../../assets/imgs/produtos/24.jpeg'
import Faca25 from '../../assets/imgs/produtos/25.jpeg'

function Category(props) {

    return (
        <>
<main>

{/* <!-- BEGIN FILTROS --> */}

<div class="container mt-5 mb-4">
    <div class="row">
        <h2 class="texto-pesquisa mb-4"> Resultado </h2>
    </div>
    <div class="row">

    {/* <!-- BEGIN CATALOGO PRODUTOS --> */}

        <div class="col-12 col-md-12 col-lg-12 catalogo-produtos">
            <div class="row linha-produtos-encontrados">
            <h5 class="produtos-encontrados"> Produtos Encontrados: </h5>
                <div class="dropdown drop-ordena">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Ordenar por:
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a class="dropdown-item" href="#"> Maior Preço </a></li>
                      <li><a class="dropdown-item" href="#"> Menor Preço </a></li>
                    </ul>
                </div>
            </div>
            <div class="row catalogo-produtos2">

            <Card nomeProduto="Faca-A47" imagem={Faca25} preco="156,50" parcelamento="12,30" />
            <Card nomeProduto="Mc_Carioca" imagem={Faca2} preco="180,50" parcelamento="16,00" />
            <Card nomeProduto="XTR-Lich" imagem={Faca3} preco="160,50" parcelamento="19,36" />
            <Card nomeProduto="Espada Link"  imagem={Faca24} preco="50,00" parcelamento="11,20" />

            </div> 

        {/* <!-- ENDING CATALOGO PRODUTOS -->

        <!-- BEGIN BOTAO CARREGAR --> */}

        <div class="row linha-botao-carregar">
            <div class="col-12 col-md-12 col-lg-12 botao-carregar">
                <br/><br/><br/><br/>
                <Button class="btn-principal btn-cancelar" label="Carregar mais"/>
            </div>
        </div>

        {/* <!-- ENDING BOTAO CARREGAR --> */}
            
        </div>

    </div>
</div>

</main>

        </>
    )
}

export default Category
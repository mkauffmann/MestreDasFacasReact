import React, {useEffect, useState} from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

import './Category.css'

import Button from '../../components/micro/Button/Button'
import '../../components/micro/Button/Button.css'

import Card from '../../components/macro/CardHome/Card'
import '../../components/macro/CardHome/Card.css'

// import SearchBar from '../../components/macro/Forms/SearchBar/SearchBar'


function Category(props) {
    const [produtos, setProdutos] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8080/product/')
        .then((response) =>{
            setProdutos(response.data)
            
        })
        .catch((error) =>{
            console.error("Aconteceu um erro!" + error)
        })
    }, [])


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

            <div className="container lista">
            <Card produtos={produtos}/>
            </div>

            </div> 

        {/* /* <!-- ENDING CATALOGO PRODUTOS --> */}

        
            
        </div>

    </div>
</div>

</main>

        </>
    )
}

export default Category
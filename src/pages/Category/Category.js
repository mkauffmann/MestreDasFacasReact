import React from 'react'
import './Category.css'

import Button from '../../components/micro/Button/Button'
import '../../components/micro/Button/Button.css'

function Category(props) {

    return (
        <>
<main>

{/* <!-- BEGIN FILTROS --> */}

<div class="container mt-5 mb-4">
    <div class="row">
        <h2 class="texto-pesquisa mb-4"> Você buscou por X </h2>
    </div>
    <div class="row">
        {/* <div class="col-12 col-md-6 col-lg-3 filtros">
            <h5 class="titulo-filtro mt-3"> Desconto </h5>
            <div class="form-floating mb-3">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control caixa-filtro" placeholder="Busque por desconto" aria-label="filtro" aria-describedby="basic-addon1"/>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="desconto"/>
                <label class="form-check-label label-check-custom" for="desconto"> 6% a 8% </label>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="desconto"/>
                <label class="form-check-label label-check-custom" for="desconto"> 9% a 15% </label>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="desconto"/>
                <label class="form-check-label label-check-custom" for="desconto"> 16% a 28% </label>
            </div>

          

            <h5 class="titulo-filtro"> Marca </h5>
            <div class="form-floating mb-3">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control caixa-filtro" placeholder="Busque por marca" aria-label="filtro" aria-describedby="basic-addon1"/>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="marca"/>
                <label class="form-check-label label-check-custom" for="marca"> X </label>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="marca"/>
                <label class="form-check-label label-check-custom" for="marca"> Y </label>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="marca"/>
                <label class="form-check-label label-check-custom" for="marca"> Z </label>
            </div>

           

            <h5 class="titulo-filtro"> Sub-Categorias </h5>
            <div class="form-floating mb-3">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control caixa-filtro" placeholder="Busque por sub-categoria" aria-label="filtro" aria-describedby="basic-addon1"/>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="sub-categoria"/>
                <label class="form-check-label label-check-custom" for="sub-categoria"> Chefe </label>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="sub-categoria"/>
                <label class="form-check-label label-check-custom" for="sub-categoria"> Legumes </label>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="sub-categoria"/>
                <label class="form-check-label label-check-custom" for="sub-categoria"> Pão </label>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="sub-categoria"/>
                <label class="form-check-label label-check-custom" for="sub-categoria"> Cutelo </label>
            </div>

            

            <h5 class="titulo-filtro"> Preço </h5>
            <div class="form-floating mb-3">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control caixa-filtro" placeholder="Busque por preço" aria-label="filtro" aria-describedby="basic-addon1"/>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="preco"/>
                <label class="form-check-label label-check-custom" for="preco"> R$ 30 a R$ 60 </label>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="preco"/>
                <label class="form-check-label label-check-custom" for="preco"> R$ 60 a R$ 120 </label>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="preco"/>
                <label class="form-check-label label-check-custom" for="preco"> R$ 120 a R$ 200 </label>
            </div>
            <div class="mb-1 form-check">
                <input type="checkbox" class="form-check-input custom-check" id="preco"/>
                <label class="form-check-label label-check-custom" for="preco"> R$ 200 a R$ 20000 </label>
            </div>

            
        </div> */}
    {/* <!-- ENDING FILTROS -->

    <!-- BEGIN CATALOGO PRODUTOS --> */}

        <div class="col-12 col-md-12 col-lg-12 catalogo-produtos">
            <div class="row linha-produtos-encontrados">
                <h5 class="produtos-encontrados"> X Produtos Encontrados </h5>
                <div class="dropdown drop-ordena">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Ordenar por:
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a class="dropdown-item" href="#"> Relevância </a></li>
                      <li><a class="dropdown-item" href="#"> Maior Preço </a></li>
                      <li><a class="dropdown-item" href="#"> Menor Preço </a></li>
                      <li><a class="dropdown-item" href="#"> Mais Vendido </a></li>
                    </ul>
                </div>
            </div>
            <div class="row catalogo-produtos2">
                <div class="col-12 col-md-6 col-lg-3 item-catalogo">
                    <label class="imagem-produto-ctg"> IMAGEM PRODUTO </label>
                    <p class="nome-do-produto-ctg"> Nome do produto </p>
                    <p class="preco-do-produto"> R$ XX,XX </p> 
                    <Button class="btn-principal btn-comprar" label="Comprar"/>
                    {/* <button type="submit" class="btn-principal btn-comprar" onclick="window.location.href='pdp.html'" > Comprar </button> */}
                </div>
                <div class="col-12 col-md-6 col-lg-3 item-catalogo">
                    <label class="imagem-produto-ctg"> IMAGEM PRODUTO </label>
                    <p class="nome-do-produto-ctg"> Nome do produto </p>
                    <p class="preco-do-produto"> R$ XX,XX </p> 
                    <Button class="btn-principal btn-comprar" label="Comprar"/>
                </div>
                <div class="col-12 col-md-6 col-lg-3 item-catalogo">
                    <label class="imagem-produto-ctg"> IMAGEM PRODUTO </label>
                    <p class="nome-do-produto-ctg"> Nome do produto </p>
                    <p class="preco-do-produto"> R$ XX,XX </p> 
                    <Button class="btn-principal btn-comprar" label="Comprar"/>
                </div>
                <div class="col-12 col-md-6 col-lg-3 item-catalogo">
                    <label class="imagem-produto-ctg"> IMAGEM PRODUTO </label>
                    <p class="nome-do-produto-ctg"> Nome do produto </p>
                    <p class="preco-do-produto"> R$ XX,XX </p> 
                    <Button class="btn-principal btn-comprar" label="Comprar"/>
                </div>
            </div>

            <div class="row catalogo-produtos2">
                <div class="col-12 col-md-6 col-lg-3 item-catalogo">
                    <label class="imagem-produto-ctg"> IMAGEM PRODUTO </label>
                    <p class="nome-do-produto-ctg"> Nome do produto </p>
                    <p class="preco-do-produto"> R$ XX,XX </p> 
                    <Button class="btn-principal btn-comprar" label="Comprar"/>
                </div>
                <div class="col-12 col-md-6 col-lg-3 item-catalogo">
                    <label class="imagem-produto-ctg"> IMAGEM PRODUTO </label>
                    <p class="nome-do-produto-ctg"> Nome do produto </p>
                    <p class="preco-do-produto"> R$ XX,XX </p> 
                    <Button class="btn-principal btn-comprar" label="Comprar"/>
                </div>
                <div class="col-12 col-md-6 col-lg-3 item-catalogo">
                    <label class="imagem-produto-ctg"> IMAGEM PRODUTO </label>
                    <p class="nome-do-produto-ctg"> Nome do produto </p>
                    <p class="preco-do-produto"> R$ XX,XX </p> 
                    <Button class="btn-principal btn-comprar" label="Comprar"/>
                </div>
                <div class="col-12 col-md-6 col-lg-3 item-catalogo">
                    <label class="imagem-produto-ctg"> IMAGEM PRODUTO </label>
                    <p class="nome-do-produto-ctg"> Nome do produto </p>
                    <p class="preco-do-produto"> R$ XX,XX </p> 
                    <Button class="btn-principal btn-comprar" label="Comprar"/>
                </div>
            </div>
            
        </div>

        {/* <!-- ENDING CATALOGO PRODUTOS -->

        <!-- BEGIN BOTAO CARREGAR --> */}

        <div class="row linha-botao-carregar">
            <div class="col-12 col-md-6 col-lg-3 botao-carregar">
                <br/><br/><br/><br/>
                <Button class="btn-principal btn-cancelar" label="Carregar mais"/>
            </div>
        </div>

        {/* <!-- ENDING BOTAO CARREGAR --> */}

    </div>
</div>

</main>

        </>
    )
}

export default Category
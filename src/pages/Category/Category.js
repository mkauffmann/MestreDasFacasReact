import React from 'react'
import './Category.css'

import Button from '../../components/micro/Button/Button'
import '../../components/micro/Button/Button.css'

import { Dropdown } from 'react-bootstrap'

function Category(props) {

    return (
        <>

            {/* <!-- BEGIN FILTROS --> */}

            <div className="container mt-5 mb-4">
                <div className="row">
                    <h2 className="texto-pesquisa mb-4"> Você buscou por X </h2>
                </div>
                {/* <div class="row">
                    <div class="col-12 col-md-6 col-lg-3 filtros">
                        <h5 class="titulo-filtro mt-3"> Desconto </h5>
                        <div class="form-floating mb-3">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control caixa-filtro" placeholder="Busque por desconto" aria-label="filtro" aria-describedby="basic-addon1">
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="desconto">
                            <label class="form-check-label label-check-custom" for="desconto"> 6% a 8% </label>
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="desconto">
                            <label class="form-check-label label-check-custom" for="desconto"> 9% a 15% </label>
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="desconto">
                            <label class="form-check-label label-check-custom" for="desconto"> 16% a 28% </label>
                        </div>

                        <hr>

                        <h5 class="titulo-filtro"> Marca </h5>
                        <div class="form-floating mb-3">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control caixa-filtro" placeholder="Busque por marca" aria-label="filtro" aria-describedby="basic-addon1">
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="marca">
                            <label class="form-check-label label-check-custom" for="marca"> X </label>
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="marca">
                            <label class="form-check-label label-check-custom" for="marca"> Y </label>
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="marca">
                            <label class="form-check-label label-check-custom" for="marca"> Z </label>
                        </div>

                        <hr>

                        <h5 class="titulo-filtro"> Sub-Categorias </h5>
                        <div class="form-floating mb-3">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control caixa-filtro" placeholder="Busque por sub-categoria" aria-label="filtro" aria-describedby="basic-addon1">
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="sub-categoria">
                            <label class="form-check-label label-check-custom" for="sub-categoria"> Chefe </label>
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="sub-categoria">
                            <label class="form-check-label label-check-custom" for="sub-categoria"> Legumes </label>
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="sub-categoria">
                            <label class="form-check-label label-check-custom" for="sub-categoria"> Pão </label>
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="sub-categoria">
                            <label class="form-check-label label-check-custom" for="sub-categoria"> Cutelo </label>
                        </div>

                        <hr>

                        <h5 class="titulo-filtro"> Preço </h5>
                        <div class="form-floating mb-3">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control caixa-filtro" placeholder="Busque por preço" aria-label="filtro" aria-describedby="basic-addon1">
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="preco">
                            <label class="form-check-label label-check-custom" for="preco"> R$ 30 a R$ 60 </label>
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="preco">
                            <label class="form-check-label label-check-custom" for="preco"> R$ 60 a R$ 120 </label>
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="preco">
                            <label class="form-check-label label-check-custom" for="preco"> R$ 120 a R$ 200 </label>
                        </div>
                        <div class="mb-1 form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="preco">
                            <label class="form-check-label label-check-custom" for="preco"> R$ 200 a R$ 20000 </label>
                        </div>

                        <hr> */}

                {/* <!-- ENDING FILTROS --> */}

                {/* <!-- BEGIN CATALOGO PRODUTOS --> */}

                {/* </div> */}

                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 linha-produtos-encontrados">
                        <h5 className="produtos-encontrados"> X Produtos Encontrados </h5>

                        <div className="drop-ordena">
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    Ordenar por:
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Relevância</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Maior Preço</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Menor Preço</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        {/* <div class="dropdown drop-ordena">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ordenar por:
                                    </a>
                                     <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#"> Relevância </a></li>
                                    <li><a class="dropdown-item" href="#"> Maior Preço </a></li>
                                    <li><a class="dropdown-item" href="#"> Menor Preço </a></li>
                                    <li><a class="dropdown-item" href="#"> Mais Vendido </a></li>
                                    </ul> 
                                </div> */}
                    </div>
                </div>

                <div className="row catalogo-produtos mt-5">
                        <div className="col-12 col-md-6 col-lg-3 item-catalogo">
                            <label className="imagem-produto2"> IMAGEM PRODUTO </label>
                            {/* <img src="./img/Classificacao_Estrelas.png" class="classifica-estrelas" width="100px"> */}
                            <p className="nome-do-produto2"> Nome do produto </p>
                            <p className="preco-do-produto"> R$ XX,XX </p>
                            {/* <button type="submit" class="btn-principal btn-comprar" onclick="window.location.href='pdp.html'" > Comprar </button> */}
                            <Button label='Comprar' class='btn-principal btn-comprar-category' />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item-catalogo">
                            <label className="imagem-produto2"> IMAGEM PRODUTO </label>
                            {/* <img src="./img/Classificacao_Estrelas.png" class="classifica-estrelas" width="100px"> */}
                            <p className="nome-do-produto2"> Nome do produto </p>
                            <p className="preco-do-produto"> R$ XX,XX </p>
                            {/* <button type="submit" class="btn-principal btn-comprar" onclick="window.location.href='pdp.html'" > Comprar </button> */}
                            <Button label='Comprar' class='btn-principal btn-comprar-category' />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item-catalogo">
                            <label className="imagem-produto2"> IMAGEM PRODUTO </label>
                            {/* <img src="./img/Classificacao_Estrelas.png" class="classifica-estrelas" width="100px"> */}
                            <p className="nome-do-produto2"> Nome do produto </p>
                            <p className="preco-do-produto"> R$ XX,XX </p>
                            {/* <button type="submit" class="btn-principal btn-comprar" onclick="window.location.href='pdp.html'" > Comprar </button> */}
                            <Button label='Comprar' class='btn-principal btn-comprar-category' />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item-catalogo">
                            <label className="imagem-produto2"> IMAGEM PRODUTO </label>
                            {/* <img src="./img/Classificacao_Estrelas.png" class="classifica-estrelas" width="100px"> */}
                            <p className="nome-do-produto2"> Nome do produto </p>
                            <p className="preco-do-produto"> R$ XX,XX </p>
                            {/* <button type="submit" class="btn-principal btn-comprar" onclick="window.location.href='pdp.html'" > Comprar </button> */}
                            <Button label='Comprar' class='btn-principal btn-comprar-category' />
                        </div>
                </div>

                <div className="row catalogo-produtos mt-5">
                        <div className="col-12 col-md-6 col-lg-3 item-catalogo">
                            <label className="imagem-produto2"> IMAGEM PRODUTO </label>
                            {/* <img src="./img/Classificacao_Estrelas.png" class="classifica-estrelas" width="100px"> */}
                            <p className="nome-do-produto2"> Nome do produto </p>
                            <p className="preco-do-produto"> R$ XX,XX </p>
                            {/* <button type="submit" class="btn-principal btn-comprar" onclick="window.location.href='pdp.html'" > Comprar </button> */}
                            <Button label='Comprar' class='btn-principal btn-comprar-category' />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item-catalogo">
                            <label className="imagem-produto2"> IMAGEM PRODUTO </label>
                            {/* <img src="./img/Classificacao_Estrelas.png" class="classifica-estrelas" width="100px"> */}
                            <p className="nome-do-produto2"> Nome do produto </p>
                            <p className="preco-do-produto"> R$ XX,XX </p>
                            {/* <button type="submit" class="btn-principal btn-comprar" onclick="window.location.href='pdp.html'" > Comprar </button> */}
                            <Button label='Comprar' class='btn-principal btn-comprar-category' />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item-catalogo">
                            <label className="imagem-produto2"> IMAGEM PRODUTO </label>
                            {/* <img src="./img/Classificacao_Estrelas.png" class="classifica-estrelas" width="100px"> */}
                            <p className="nome-do-produto2"> Nome do produto </p>
                            <p className="preco-do-produto"> R$ XX,XX </p>
                            {/* <button type="submit" class="btn-principal btn-comprar" onclick="window.location.href='pdp.html'" > Comprar </button> */}
                            <Button label='Comprar' class='btn-principal btn-comprar-category' />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item-catalogo">
                            <label className="imagem-produto2"> IMAGEM PRODUTO </label>
                            {/* <img src="./img/Classificacao_Estrelas.png" class="classifica-estrelas" width="100px"> */}
                            <p className="nome-do-produto2"> Nome do produto </p>
                            <p className="preco-do-produto"> R$ XX,XX </p>
                            {/* <button type="submit" class="btn-principal btn-comprar" onclick="window.location.href='pdp.html'" > Comprar </button> */}
                            <Button label='Comprar' class='btn-principal btn-comprar-category' />
                        </div>
                </div>



                {/* <!-- ENDING CATALOGO PRODUTOS --> */}

                {/* <!-- BEGIN BOTAO CARREGAR --> */}

                <div className="row linha-botao-carregar">
                    <div className="col-12 col-md-6 col-lg-3 botao-carregar">
                        <br /><br /><br /><br />
                        <Button label='Carregar mais' class='btn-cancelar btn-carregar' />
                    </div>
                </div>

                {/* <!-- ENDING BOTAO CARREGAR --> */}

            </div>

        </>
    )
}

export default Category
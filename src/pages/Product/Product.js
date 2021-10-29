import React from 'react'
import './Product.css'

import Button from '../../components/micro/Button/Button'
import '../../components/micro/Button/Button.css'

function Product(props) {

    return(
        <>
        <div className="container mt-5 mb-4 produto">
                <div className="row">
                    <p className="texto-categoria"> Mestre das Facas - Categoria 1 </p>
                    <div className="col-12 col-md-6 col-lg-3 col-produto">
                        <label className="imagem-produto"> IMAGEM PRODUTO </label>
                        {/* Classificação e calculo de frete: */}
                        {/* <img src="./img/Classificacao_Estrelas.png" className="classifica-estrelas" width="100px"/> */}
                            {/* <div className="col-12 col-md-6 col-lg-10">
                                <p> Calcular o frete e prazo de entrega </p>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="_____-___"/> */}
                                    {/* <button type="reset" className="btn-cancelar mx-2"> Calcular </button> */}
                                    {/* <Button label='Calcular' class='btn-cancelar'/>
                                </div>
                            </div> */}
                    </div>
                    <div className="col-12 col-md-6 col-lg-9">
                        <div className="nome-do-produto">
                           <p> Nome do produto </p> 
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-5">
                                <select className="form-select caixa-cor-cabo" aria-label="Default select example">
                                    <option selected>Cor do cabo</option>
                                    <option value="1">Azul</option>
                                    <option value="2">Verde</option>
                                    <option value="3">Amarelo</option>
                                  </select>
                            </div>
                            <div className="col-12 col-md-6 col-lg-5">
                                    {/* <button type="submit" className="btn-principal" onclick="window.location.href='meucarrinho.html'"> Comprar </button> */}
                                    <Button label='Comprar' class='btn-principal btn-comprar'/>
                            </div>
                        </div>
                        <div>
                            <h3 className="preco"> R$ XX,XX </h3>
                        </div>
                        <p className="texto-desconto"> 10% de desconto em 1x no Cartão ou Boleto. sem juros </p>
                        <hr/>
                        <p className="texto-cartao-credito"> R$ XX,XX ou até 1x de R$XX,XX sem juros no Cartão de Crédito </p>
                        <hr/>
                        <p className="texto-boleto"> R$ XX,XX - 10% de desconto
                        em 1x no Boleto. </p>
                        <hr/>
                        <p className="texto-pix"> R$ XX,XX - Em pagamento por PIX </p>
                    </div>
                </div>
            </div>

            {/* <!-- ENDING PRODUTO --> */}

            {/* <!-- BEGIN DESCRICAO --> */}

            <div className="container mt-5 mb-4 produto">


                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-descricao">
                        <h3 className="mt-2"> Descrição do Produto </h3>
                        <p> Morbi nisi diam, aliquet ut vulputate sit amet, sodales ut metus. Sed ut nisl consectetur, molestie neque nec, mollis velit. Sed sit amet erat dolor. Ut quis ligula eu neque egestas faucibus. Sed eleifend arcu ac quam cursus, sed dignissim magna feugiat. Nullam eget tortor id est interdum accumsan. Fusce volutpat, nisi ut pharetra sodales, lacus odio interdum purus, sed dignissim leo ipsum ac lectus. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-especificacoes mt-5">
                        <h3 className="mt-2"> Especificações e Dimensões </h3>
                        <ul>
                            <li> Altura:  </li>
                            <li> Largura:  </li>  
                            <li> Comprimento:  </li>  
                            <li> Peso: </li> 
                        </ul>
                    </div>
                </div>

            {/* <!-- ENDING DESCRICAO --> */}

            {/* <!-- BEGIN AVALIACAO --> */}
            

                {/* <div class="row">
                    <div class="col-12 col-md-6 col-lg-12 mt-4">
                        <h3 class="texto-avalie-produto"> Avalie o Produto: </h3>
                    </div>
                </div> */}

                {/* <div class="row">
                    <div class="col-12 col-md-6 col-lg-12 mt-4">
                        <h3 class="mt-2"> Deixe um comentário! </h3>
                        <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                </div> */}

                {/* <div class="row">
                    <div class="col-12 col-md-6 col-lg-3 mt-4">
                        <button type="reset" class="btn-cancelar btn-enviar"> Enviar </button>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default Product
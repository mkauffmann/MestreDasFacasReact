import React from 'react'
import './Product.css'
import Button from '../../components/micro/Button/Button'
import '../../components/micro/Button/Button.css'
import Faca7 from '../../assets/imgs/home/7.jpeg'

function Product(props) {

    return (
        <>
            <div className="container mt-5 mb-4 produto paddProduto">
                <div className="row">
                    <div className="texto-categoria"> Mestre das Facas - Categoria {props.categoria} </div>
                    <div className="col-12 col-md-6 col-lg-3 col-produto">
                        <img className="imagem-produto" src={Faca7}></img>
                    </div>
                    <div className="col-12 col-md-6 col-lg-9">
                        <div className="nome-do-produto">
                            <div><b> Nome do produto </b></div>
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
                                <Button label='Comprar' class='btn-principal btn-comprar' />
                            </div>
                        </div>
                        <div>
                            <h3 className="preco">R$ 200,30</h3>
                        </div>
                        <div className="texto-cartao-credito">R${props.preco} ou até 12x de R$ {120 / 12} sem juros no Cartão de Crédito </div>
                        <hr />
                        <div className="texto-boleto">Pagamento por Boleto </div>
                        <hr />
                        <div className="texto-pix">Pagamento por PIX </div>
                    </div>
                </div>
            </div>

            {/* <!-- ENDING PRODUTO --> */}

            {/* <!-- BEGIN DESCRICAO --> */}

            <div className="container mt-5 mb-4 produto">


                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-descricao">
                        <h3 className="mt-2"> Descrição do Produto </h3>
                        <div>{props.descricao}Uma faca muito dahora legal, se eu fosse voces compraria, porque é uma faca que corta tomate e ate cebola,
                            não é algo que se vê todos os dias, alem disso ela tem uma outra função, é só passar agua que ela ta limpa denovo e pode cortar
                            até beringela e bacate</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-especificacoes mt-5">
                        <h3 className="mt-2"> Especificações e Dimensões </h3>
                        <ul>
                            <li> Altura: {props.altura} </li>
                            <li> Largura: {props.largura}  </li>
                            <li> Comprimento: {props.comprimento}  </li>
                            <li> Peso:{props.peso} </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- ENDING DESCRICAO --> */}

                {/* <!-- BEGIN AVALIACAO --> */}



            </div>

        </>
    )
}

export default Product
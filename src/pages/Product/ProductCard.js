import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/micro/Button/Button'
import './Product.css'

function ProductCard(props) {
const produto = {...props.produto} || []

    return (
        <>
            <div className="container mt-5 mb-4 produto paddProduto">
                <div className="row">
                    <div className="texto-categoria"> Mestre das Facas - Categoria {props.categoria} </div>
                    <div className="col-12 col-md-6 col-lg-3 col-produto">
                        <img className="imagem-produto" src={produto.image}></img>
                    </div>
                    <div className="col-12 col-md-6 col-lg-9">
                        <div className="nome-do-produto">
                            <div><b>{produto.productName}</b></div>
                        </div>
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-5">

                                <Link to="/cart"> <Button label='Comprar' class='btn-principal btn-comprar' /> </Link>
                            </div>
                        </div>
                        <div>
                            {/* <h3 className="preco">R$ {produto.productPrice.value}</h3> */}
                        </div>
                        {/* <div className="texto-cartao-credito">12x de R$ {parseInt(produto.productPrice.value/12)}  sem juros no Cartão de Crédito </div> */}
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
                        <h3 className="mt-2">Descrição do Produto</h3>
                        <div>{produto.descriptionProduct}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-especificacoes mt-5">
                        <h3 className="mt-2"> Especificações e Dimensões </h3>
                        <ul>
                            <li> Altura: {produto.height} </li>
                            <li> Largura: {produto.width}  </li>
                            <li> Comprimento: {produto.length}  </li>
                            <li> Peso:{produto.weight} </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- ENDING DESCRICAO --> */}

                {/* <!-- BEGIN AVALIACAO --> */}



            </div>

        </>
    )
}
export default ProductCard
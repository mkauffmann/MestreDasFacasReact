import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import Button from '../../micro/Button/Button'


function Card(props) {
    const novidades = props.novidades || []
    const destaques = props.destaques || []
    return (

        <>
            {
                novidades.map(produto => {
                    return (
                        <div className="container col-6 col-sm-6 col-md-3 col-xl-3 col-xll-3 produtoDesktop">
                            <div className="card " style={{ width: '18rem' }}>
                                <Link to={`/product/${produto.id}`}>
                                    <img src={produto.image} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body ">
                                    <h5 className="card-title tituloProduto card-text">{produto.productName}</h5>
                                    <div className="card-text precoProduto">R$ {produto.productPrice.value}<div>Ou</div></div> <div className="ou">12x DE R$ {parseInt(produto.productPrice.value/12)} s/juros</div><p></p>
                                    <Link to="/cart"><Button label="Comprar" class="btn-default btn-principal home-btn"></Button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
             {
                destaques.map(produto => {
                    return (
                        <div className="container col-6 col-sm-6 col-md-3 col-xl-3 col-xll-3 produtoDesktop">
                            <div className="card " style={{ width: '18rem' }}>
                            <Link to={`/product/${produto.id}`}>
                                    <img src={produto.image} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body ">
                                    <h5 className="card-title tituloProduto">{produto.productName}</h5>
                                    <div className="card-text precoProduto">R$ {produto.productPrice.value}<div>Ou</div></div> <div className="ou">12x DE R$ {parseInt(produto.productPrice.value/12)} s/juros</div><p></p>
                                    <Link to="/cart"><Button label="Comprar" class="btn-default btn-principal home-btn"></Button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
        </>
    )
}

export default Card
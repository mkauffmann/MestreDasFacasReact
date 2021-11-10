import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import Button from '../../micro/Button/Button'


function Cart(props) {

    return (
        <>

            <div className={"container col-6 col-sm-4 col-md-3 col-xl-3 col-xll-3 produtoDesktop " + props.className}>
                <div className="card " style={{ width: '18rem' }}>
                    <img src={props.imagem} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title tituloProduto">{props.nomeProduto}</h5>
                        <p className="card-text precoProduto">R${props.preco}</p> <p>12x DE R${props.parcelamento}</p>
                        <Link to="/cart"><Button label="Comprar" class="btn-default btn-principal home-btn"></Button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
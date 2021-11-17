import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import Button from '../../micro/Button/Button'


function Card(props) {

    return (
        <>

            <div className="container col-6 col-sm-6 col-md-3 col-xl-3 col-xll-3 produtoDesktop">
                <div className="card " style={{ width: '18rem' }}>
                    <Link to={props.path}>      
                    <img src={props.img} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body ">
                        <h5 className="card-title tituloProduto">{props.nomeProduto}</h5>
                        <div className="card-text precoProduto">R$ {props.preco}<div>Ou</div></div> <div className="ou">12x DE R$ {props.preco/12} s/juros</div><p></p>
                        <Link to="/cart"><Button label="Comprar" class="btn-default btn-principal home-btn"></Button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
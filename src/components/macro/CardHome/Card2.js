import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import Button from '../../micro/Button/Button'
import Faca2 from '../../../assets/imgs/home/faca-2.jpg'

function Cart2(props) {

    return (
        <>
            <div class="container col-12 d-flex">
                <div class="container col-6 col-md-3 produtoDesktop">
                    <div class="card " style={{ width: '18rem' }}>
                        <img src={Faca2} style={{ height: '104px' }} class="card-img-top" alt="..." />
                        <div class="card-body ">
                            <h5 class="card-title tituloProduto">Faca M7-32</h5>
                            <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                            <Link to="/cart"><Button label="Comprar" class="btn-principal home-btn"></Button></Link>
                        </div>
                    </div>
                </div>
                <div class="container col-6 col-md-3 produtoDesktop">
                    <div class="card " style={{ width: '18rem' }}>
                        <img src={Faca2} style={{ height: '104px' }} class="card-img-top" alt="..." />
                        <div class="card-body ">
                            <h5 class="card-title tituloProduto">Faca M7-32</h5>
                            <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                            <Link to="/cart"><Button label="Comprar" class=" btn-principal home-btn"></Button></Link>
                        </div>
                    </div>
                </div>
                <div class="container col-6 col-md-3 produtoDesktop ocultaProduto">
                    <div class="card " style={{ width: '18rem' }}>
                        <img src={Faca2} style={{ height: '104px' }} class="card-img-top" alt="..." />
                        <div class="card-body ">
                            <h5 class="card-title tituloProduto">Faca M7-32</h5>
                            <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                            <Link to="/cart"><Button label="Comprar" class="btn-default btn-principal home-btn"></Button></Link>
                        </div>
                    </div>
                </div>
                <div class="container col-6 col-md-3 produtoDesktop ocultaProduto">
                    <div class="card " style={{ width: '18rem' }}>
                        <img src={Faca2} style={{ height: '104px' }} class="card-img-top" alt="..." />
                        <div class="card-body ">
                            <h5 class="card-title tituloProduto">Faca M7-32</h5>
                            <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                            <Link to="/cart"><Button label="Comprar" class="btn-default btn-principal home-btn"></Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart2
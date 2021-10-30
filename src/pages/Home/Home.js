import React from 'react'
import './Home.css'
import Banners from '../../components/macro/Banners/Banner'
import Faca1 from '../../assets/imgs/home/faca-1.jpeg'
import Faca2 from '../../assets/imgs/home/faca-2.jpg'
import Patrocinio from '../../assets/imgs/home/patrocinador.png'

function Home(props) {

    return (
        <>
        <Banners />
            <main>
                <div class="container d-flex banner1">
                    <div class="container col-6">
                        <a href="#"><img src={Patrocinio} style={{height: '7vw'}} class="d-block w-100" /></a>
                    </div>
                    <div class="container col-6">
                        <a href="#"><img src={Patrocinio} style={{height: '7vw'}} class="d-block w-100" /></a>
                    </div>
                </div>
                {/* <!--DESTAQUE DE PRODUTOS --> */}
                <div class="container destaques">
                    <h2 class="destaques">Nossos Destaques</h2>
                </div>
                <div class="container col-12 d-flex">
                    <div class="container col-6 col-md-3 produtoDesktop">
                        <div class="card " style={{width: '18rem'}}>
                            <img src={Faca1} class="card-img-top" alt="..." />
                            <div class="card-body ">
                                <h5 class="card-title tituloProduto">Faca M7-32</h5>
                                <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                                <a href="./pdp.html"><button class="botaoComprar">Comprar</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="container col-6 col-md-3 produtoDesktop">
                        <div class="card " style={{width: '18rem'}}>
                            <img src={Faca1} class="card-img-top" alt="..." />
                            <div class="card-body ">
                                <h5 class="card-title tituloProduto">Faca M7-32</h5>
                                <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                                <a href="./pdp.html"><button class="botaoComprar">Comprar</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="container col-6 col-md-3 produtoDesktop ocultaProduto">
                        <div class="card " style={{width: '18rem'}}>
                            <img src={Faca1} class="card-img-top" alt="..." />
                            <div class="card-body ">
                                <h5 class="card-title tituloProduto">Faca M7-32</h5>
                                <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                                <a href="./pdp.html"><button class="botaoComprar">Comprar</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="container col-6 col-md-3 produtoDesktop ocultaProduto">
                        <div class="card " style={{width: '18rem'}}>
                            <img src={Faca1} class="card-img-top" alt="..." />
                            <div class="card-body ">
                                <h5 class="card-title tituloProduto">Faca M7-32</h5>
                                <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                                <a href="./pdp.html"><button class="botaoComprar">Comprar</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--BEGING SECOND BANNER --> */}
                <div class="container d-flex banner2">
                    <div class="container col-6">
                        <a href="#"><img src={Patrocinio} style={{height: '7vw'}} class="d-block w-100" /></a>
                    </div>
                    <div class="container col-6">
                        <a href="#"><img src={Patrocinio} style={{height: '7vw'}} class="d-block w-100" /></a>
                    </div>
                </div>
                {/* <!-- NOVIDADE DE PRODUTOS --> */}
                <div class="container destaques">
                    <h2 class="destaques">Novidades</h2>
                </div>
                <div class="container col-12 d-flex">
                    <div class="container col-6 col-md-3 produtoDesktop">
                        <div class="card " style={{width: '18rem'}}>
                            <img src={Faca2} style={{height: '104px'}} class="card-img-top" alt="..." />
                            <div class="card-body ">
                                <h5 class="card-title tituloProduto">Faca M7-32</h5>
                                <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                                <a href="./pdp.html"><button class="botaoComprar">Comprar</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="container col-6 col-md-3 produtoDesktop">
                        <div class="card " style={{width: '18rem'}}>
                            <img src={Faca2} style={{height: '104px'}} class="card-img-top" alt="..." />
                            <div class="card-body ">
                                <h5 class="card-title tituloProduto">Faca M7-32</h5>
                                <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                                <a href="./pdp.html"><button class="botaoComprar">Comprar</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="container col-6 col-md-3 produtoDesktop ocultaProduto">
                        <div class="card " style={{width: '18rem'}}>
                            <img src={Faca2} style={{height: '104px'}} class="card-img-top" alt="..." />
                            <div class="card-body ">
                                <h5 class="card-title tituloProduto">Faca M7-32</h5>
                                <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                                <a href="./pdp.html"><button class="botaoComprar">Comprar</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="container col-6 col-md-3 produtoDesktop ocultaProduto">
                        <div class="card " style={{width: '18rem'}}>
                            <img src={Faca2} style={{height: '104px'}} class="card-img-top" alt="..." />
                            <div class="card-body ">
                                <h5 class="card-title tituloProduto">Faca M7-32</h5>
                                <p class="card-text precoProduto">R$321,50 </p> <p>12x de R$82,12</p>
                                <a href="./pdp.html"><button class="botaoComprar">Comprar</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- BEGING THIRD BANNER --> */}
                <div class="container d-flex banner3">
                    <div class="container col-6">
                        <a href="#"><img src={Patrocinio} style={{height: '7vw'}} class="d-block w-100" /></a>
                    </div>
                    <div class="container col-6">
                        <a href="#"><img src={Patrocinio} style={{height: '7vw'}} class="d-block w-100" /></a>
                    </div>
                </div>
            </main>

            
        </>
    )
}

export default Home
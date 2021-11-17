import React from 'react'
import './Checkout.css'

import { Link } from 'react-router-dom'

import Button from '../../components/micro/Button/Button'
import '../../components/micro/Button/Button.css'

import TotalValueCheckout from '../../components/micro/TotalValueCheckout/TotalValueCheckout'

import IconHome from '../../assets/imgs/checkout/icon-home.png'
import IconCredit from '../../assets/imgs/Product/icone-cartao-credito.png'
import IconBoleto from '../../assets/imgs/Product/icone-boleto.png'
import IconPix from '../../assets/imgs/Product/icone-pix.png'

import ProductComp from '../../components/micro/ProductComp/ProductComp'

import Faca2 from '../../assets/imgs/produtos/2.jpeg'
import Faca3 from '../../assets/imgs/produtos/3.jpeg'
import Faca4 from '../../assets/imgs/produtos/24.jpeg'

function Checkout(props) {

    return (
        <>

            <div class="container mt-5 mb-4">

                <h1> Finalizar compra </h1>

                <div class="row">
                    <div class="col-sm-6">
                        <br />
                        <nav class="shadow-sm p-3 mb-5 bg-body rounded navbar navbar-light bg-light">
                            <a class="navbar-brand" href="#">
                                <img src={IconHome} width="30" height="30" class="d-inline-block align-top img-icone " alt="" />
                                Endereço de entrega
                            </a>
                        </nav>

                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Casa
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div style={{ float: 'left' }} class="   flex-column bd-highlight mb-3">
                                            <div class="p-2 bd-highlight">Rua xxxxx, 00</div>
                                            <div class="p-2 bd-highlight">00000-000</div>
                                            <div class="p-2 bd-highlight">Vila matilde - São Paulo - SP</div>
                                        </div>
                                        <div style={{ float: 'left' }} class="  flex-column bd-highlight mb-3">
                                            <div class="p-2 bd-highlight">Destinatario </div>
                                            <div class="p-2 bd-highlight">Fulado de tal</div>
                                        </div>
                                        <div class=" flex-column bd-highlight mb-3 ">
                                            <div class="p-2 bd-highlight">Referência </div>
                                            <div class="p-2 bd-highlight">casa x</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />

                            <nav class="shadow-sm p-3 mb-5 bg-body rounded navbar navbar-light bg-light">
                                <a class="navbar-brand" href="#">
                                <img src={IconCredit} width="30" height="30" class="d-inline-block align-top img-icone" alt="" />
                                    Pagamento
                                </a>
                            </nav>
                            <p>Você tem um Cupom de desconto ? Desejo usar agora</p>
                            <p>Como você deseja pagar? </p>
                            <br />


                            <br />

                            <nav class="shadow-sm p-3 mb-5 bg-body rounded navbar navbar-light bg-light">
                                <a class="navbar-brand" href="#">
                                    <input class="form-check-input custom-check" type="radio" name="flexRadioDefault" />
                                    <img src={IconPix} width="30" height="30" class="d-inline-block align-top img-icone" alt="" />
                                    Pix
                                </a>
                            </nav>

                            <br />

                            <nav class="shadow-sm p-3 mb-5 bg-body rounded navbar navbar-light bg-light">
                                <a class="navbar-brand" href="#">
                                    <input class="form-check-input custom-check" type="radio" name="flexRadioDefault" />
                                    <img src={IconCredit} width="30" height="30" class="d-inline-block align-top img-icone" alt="" />
                                    Crédito
                                </a>
                            </nav>

                            <nav class="shadow-sm p-3 mb-5 bg-body rounded navbar navbar-light bg-light">
                                <a class="navbar-brand" href="#">
                                    <input class="form-check-input custom-check" type="radio" name="flexRadioDefault" />
                                    <img src={IconBoleto} width="30" height="30" class="d-inline-block align-top img-icone" alt="" />
                                    Boleto
                                </a>
                            </nav>



                        </div>

                    </div>

                    {/* COMEÇA AQUI ATT DO 11/11 */}

                    <div class="container-fluid col-sm-6 col-md-6 col-lg-6">
                        <div>

                            <ProductComp imagem={Faca4} naoMostraCaixas/>
                            <ProductComp imagem={Faca2} naoMostraCaixas/>
                            <ProductComp imagem={Faca3} naoMostraCaixas/>

                            <hr />
                            
                                <TotalValueCheckout numero={3} info="produtos" valor={14100} />

                                <TotalValueCheckout info="Frete" valor={10.91}/>

                            <hr />

                                <TotalValueCheckout info="Total" valor={14100 + 10.91}/>

                                <Link to="/success"> <Button class="btn-principal btn-principal-finalizar" label="Finalizar Compra"/> </Link>
                                
                        </div>
                    </div>

                    {/* TERMINA AQUI ATT DO 11/11 */}

                </div>

            </div>




        </>

    )

}

export default Checkout
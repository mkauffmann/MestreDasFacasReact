import React from 'react'
import './Checkout.css'

import Button from '../../components/micro/Button/Button'
import '../../components/micro/Button/Button.css'

import TotalValue from '../../components/micro/TotalValue/TotalValue'
import '../../components/micro/TotalValue/TotalValue.css'

import IconHome from '../../assets/imgs/checkout/icon-home.png'
import IconCredit from '../../assets/imgs/product/icone-cartao-credito.png'
import IconBoleto from '../../assets/imgs/product/icone-boleto.png'
import IconPix from '../../assets/imgs/product/icone-pix.png'

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

                    <div class="col-sm-6">
                        <ul>

                            <li class="list-group-item py-3">
                                <div class="row g-3">
                                    <div class="col-4 col-md-3 col-lg-2">
                                        <a href="#">
                                            <img width="150" src={Faca2} class="img-thumbnail" />
                                        </a>
                                    </div>

                                    <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                                        <h4 style={{ fontSize: '12px' }}><b><a href="#"
                                            class="text-produto-nome text-decoration-none text-danger">Nome do Produto</a></b></h4>
                                        <h4 style={{ fontSize: '12px' }} class="text-produto-desc">
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi delectus consequatur sed
                                                culpa accusamus alias, aliquam officiis totam magni voluptas similique. Officia ab natus neque
                                                temporibus rerum distinctio excepturi?
                                            </small>
                                        </h4>
                                    </div>
                                    <div class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                                        <div style={{ fontSize: '12px' }} class="text-right mt-2">
                                            <small class="text-secondary">Subtotal: R$ 4.700,00</small>
                                            <br />
                                            <span class="text-dark">Valor Total: R$ 4.700,00</span>
                                        </div>
                                    </div>


                                </div>
                            </li>

                            <li class="list-group-item py-3">
                                <div class="row g-3">
                                    <div class="col-4 col-md-3 col-lg-2">
                                        <a href="#">
                                        <img width="150" src={Faca3} class="img-thumbnail" />
                                        </a>
                                    </div>

                                    <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                                        <h4 style={{ fontSize: '12px' }}><b><a href="#"
                                            class="text-produto-nome text-decoration-none text-danger">Nome do Produto</a></b></h4>
                                        <h4 style={{ fontSize: '12px' }} class="text-produto-desc">
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi delectus consequatur sed
                                                culpa accusamus alias, aliquam officiis totam magni voluptas similique. Officia ab natus neque
                                                temporibus rerum distinctio excepturi?
                                            </small>
                                        </h4>
                                    </div>
                                    <div class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                                        <div style={{ fontSize: '12px' }} class="text-right mt-2">
                                            <small class="text-secondary">Subtotal: R$ 4.700,00</small>
                                            <br />
                                            <span class="text-dark">Valor Total: R$ 4.700,00</span>
                                        </div>
                                    </div>


                                </div>
                            </li>

                            <li class="list-group-item py-3">
                                <div class="row g-3">
                                    <div class="col-4 col-md-3 col-lg-2">
                                        <a href="#">
                                        <img width="150" src={Faca4} class="img-thumbnail" />
                                        </a>
                                    </div>

                                    <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                                        <h4 style={{ fontSize: '12px' }}><b><a href="#"
                                            class="text-produto-nome text-decoration-none text-danger">Nome do Produto</a></b></h4>
                                        <h4 style={{ fontSize: '12px' }} class="text-produto-desc">
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi delectus consequatur sed
                                                culpa accusamus alias, aliquam officiis totam magni voluptas similique. Officia ab natus neque
                                                temporibus rerum distinctio excepturi?
                                            </small>
                                        </h4>
                                    </div>
                                    <div class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                                        <div style={{ fontSize: '12px' }} class="text-right mt-2">
                                            <small class="text-secondary">Subtotal: R$ 4.700,00</small>
                                            <br />
                                            <span class="text-dark">Valor Total: R$ 4.700,00</span>
                                        </div>
                                    </div>


                                </div>
                            </li>



                            <hr />
                            
                                <TotalValue numero={3} info="produtos" valor={14100} />

                                <TotalValue info="Frete" valor={10.91}/>

                            <hr />

                                <TotalValue info="Total" valor={14100 + 10.91}/>

                                <Button class="btn-principal btn-principal-finalizar" label="Finalizar Compra"/>
                                

                        </ul>
                    </div>

                    {/* TERMINA AQUI ATT DO 11/11 */}

                </div>

            </div>




        </>

    )

}

export default Checkout
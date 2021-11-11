import React from 'react'
import './Checkout.css'

function Checkout(props) {

    return (
        <>

            <div class="container mt-5 mb-4">

                <h1 style="color:  #860E1C;">Finalizar compra</h1>

                <div class="row">
                    <div class="col-sm-6">
                        <br />
                        <nav class="shadow-sm p-3 mb-5 bg-body rounded navbar navbar-light bg-light">
                            <a class="navbar-brand" href="#">
                                <img src="./img/Vector.png" width="30" height="30" class="d-inline-block align-top" alt="" />
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
                                        <div style="float:left" class="   flex-column bd-highlight mb-3">
                                            <div class="p-2 bd-highlight">Rua xxxxx, 00</div>
                                            <div class="p-2 bd-highlight">00000-000</div>
                                            <div class="p-2 bd-highlight">Vila matilde - São Paulo - SP</div>
                                        </div>
                                        <div style="float:left" class="  flex-column bd-highlight mb-3">
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
                                    <img src="./img/icone-cartao-credito.png" width="30" height="30" class="d-inline-block align-top" alt="" />
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
                                    <img src="./img/icone-pix.png" width="30" height="30" class="d-inline-block align-top" alt="" />
                                        Pix
                                </a>
                            </nav>

                            <br />

                            <nav class="shadow-sm p-3 mb-5 bg-body rounded navbar navbar-light bg-light">
                                <a class="navbar-brand" href="#">
                                    <input class="form-check-input custom-check" type="radio" name="flexRadioDefault" />
                                    <img src="./img/icone-pix.png" width="30" height="30" class="d-inline-block align-top" alt="" />
                                        Crédito
                                </a>
                            </nav>

                            <nav class="shadow-sm p-3 mb-5 bg-body rounded navbar navbar-light bg-light">
                                <a class="navbar-brand" href="#">
                                    <input class="form-check-input custom-check" type="radio" name="flexRadioDefault" />
                                    <img src="./img/icone-pix.png" width="30" height="30" class="d-inline-block align-top" alt="" />
                                        Boleto
                                </a>
                            </nav>
                                
                                        

                    </div>    
                    
                </div>

            </div>

        </div>




        </>
                                    )

}

export default Checkout
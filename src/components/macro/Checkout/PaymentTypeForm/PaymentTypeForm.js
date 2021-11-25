import React, { useState } from "react";
import IconCredit from '../../../../assets/imgs/Product/icone-cartao-credito.png'
import IconBoleto from '../../../../assets/imgs/Product/icone-boleto.png'
import IconPix from '../../../../assets/imgs/Product/icone-pix.png'

function PaymentTypeForm(props) {

    const dateToFormat = '1976-04-19T12:59-0500';
    const handleChange = async (event) => {
        props.choosePaymentType(event.target.value)
    }

    return (
        <>
        <h4 className="subtitle">Escolher forma de pagamento</h4>
            <form>
                <div className="card-lista mb-3">
                    <input class="form-check-input custom-check" type="radio" name="paymentType" value="PIX" onChange={handleChange} />
                    <img src={IconPix} width="30" height="30" class="d-inline-block align-top img-icone" alt="" />
                    Pix
                    <p  className="mt-2">Copie o código Pix na próxima etapa e faça o pagamento na instituição financeira de sua escolha. O código tem validade de 1 hora.</p>
                </div>
                <div className="card-lista mb-3">
                    <input class="form-check-input custom-check" type="radio" name="paymentType" value="Boleto" onChange={handleChange} />
                    <img src={IconBoleto} width="30" height="30" class="d-inline-block align-top img-icone" alt="" />
                    Boleto
                    <p  className="mt-2">O prazo para pagamento do boleto é  </p>
                </div>
                <div className="card-lista mb-3">
                    <input class="form-check-input custom-check" type="radio" name="paymentType" value="cartaoDeCredito" onChange={handleChange} />
                    <img src={IconCredit} width="30" height="30" class="d-inline-block align-top img-icone" alt="" />
                    Cartão de Crédito
                </div>
            </form>
        </>
    )
}

export default PaymentTypeForm
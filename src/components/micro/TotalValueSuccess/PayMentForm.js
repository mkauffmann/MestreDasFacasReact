import React from 'react'
import './PaymenteForm.css'
import imgCart from '../../../assets/imgs/paymentForm/teste.png'
import imgfrete from '../../../assets/imgs/Frete/Correios.png'

function PaymenteForm(props) {

    return(
        <>
 <div><p style={{ fontweight: "bold", color: "#860E1C", fontsize: "24px" }}>Forma de pagamento e entrega:</p></div>

<ul class="shadow p-3 mb-5 bg-white rounded list-group list-group-horizontal-md d-flex justify-content-center">
    <li class="teste list-group-item">


        <img className="mt-4" style={{ float: "left" }} src={imgCart} width="50" />
        <h5 class="mt-4 mx-1" style={{ float: "left", fontsize: "15" }}>4121 **** **** **** ****</h5>
    </li>
    <li class="teste list-group-item">


        <p style={{ fontweight: "bold", fontsize: "15px" }} className=""> 5x de R$ 3.768.08 SEM JUROS</p>
        <p style={{ fontweight: "bold", fontsize: "15px" }} class="">Valor total: R$ 18.810,91</p>

    </li>

    <li class="teste list-group-item">


        <img className="" style={{ float: "left" }} src={imgfrete} width="100" />
        <p style={{ fontweight: "bold", fontsize: "18px", float: "left" }} class="mt-2">Expresso: <br></br>   5 dias uteis a partir da confirmação do pagamento</p>

    </li>
</ul>








        
        </>
    )
}

export default PaymenteForm
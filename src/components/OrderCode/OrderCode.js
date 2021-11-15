import React from 'react'


function OrderCode(props) {

    return (
        <>
            <div class="mt-4 container">



<h1 class="mb-4" style={{ color: "#860E1C" }}>Pedido finalizado com sucesso!</h1>

<ul class="shadow p-3 mb-5 bg-white rounded list-group list-group-horizontal-md d-flex justify-content-center ">



    <li className="teste list-group-item teste">

        <p style={{ fontweight: "bold" }} > O numero do seu pedido é:  <p style={{ fontweight: "bold", color: "#860E1C", fontsize: "24px" }} >2866344493</p> </p>
        <p style={{ fontweight: "bold" }} >Obrigado por comprar no mestredasfacas.com.br</p>
    </li>
    <li class="teste list-group-item">


        <p style={{ fontweight: "bold", fontsize: "18px" }} className="mt-5">Em breve você receberá um e-mail de confirmação com todas as informaçoes da
            sua compra</p>

    </li>

</ul>

</div>

        </>
    )
}

export default OrderCode
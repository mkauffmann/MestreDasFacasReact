import React from 'react'
import './OrderDetails.css'
import imgProduct from '../../assets/imgs/produtos/1.jpeg'
import Button from '../../components/micro/Button/Button'
function OrderDetails(props) {

    return (
        <>
        <div><p style={{ fontweight: "bold", color: "#860E1C", fontsize: "24px" }}>Detalhes do pedido:</p></div>

<ul className="shadow p-3 mb-5 bg-white rounded list-group list-group-horizontal-md d-flex justify-content-center ">


    <li className="teste list-group-item teste">

        <div className="row g-3">

            <div className="col-4 col-md-3 col-lg-2">
                <a href="./pdp.html">

                    <img width="100" src={imgProduct} class="img-thumbnail" />

                </a>


            </div>

            <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                <p><b><a href="./pdp.html" className="text-produto-nome text-decoration-none text-danger">Nome do Produto</a></b></p>
                <p style={{ fontweight: "bold" }} className="text-produto-desc">
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi delectus consequatur sed culpa accusamus alias?
                    </small>
                </p>

            </div>

        </div>

    </li>

    <li className="teste list-group-item">

        <p><b><a className="text-produto-nome text-decoration-none text-danger">Endereço de entrega</a></b></p>
        <p style={{ fontweight: "bold" }} className="mt-3">Rua xxxx, 00 <br></br> 00000-000 <br></br> Vila matilde - São Paulo - SP Entrega Normal:  até 15 dias uteis R$ 10,91 </p>

        <Button navigation route='/dashBoard/myOrders' label='Meus pedidos' class='btn-cancelar mx-1' sytle={{ width: "100%" }} />
        <Button navigation route='/' label='Realizar uma nova compra' class='btn-principal' />

    </li>
</ul>

            
        </>
    )

}

export default OrderDetails
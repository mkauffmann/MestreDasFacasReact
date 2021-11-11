import React from 'react'
import imgCart from '../../assets/imgs/paymentForm/teste.png'
import imgProduct from '../../assets/imgs/product/PRODUTO.jpg'
import Button from '../../components/micro/Button/Button'

import imgfrete from '../../assets/imgs/Frete/Correios.png'
import './Success.css'





function Success(props) {

    return (
        <>
            
       <div class="mt-4 container">
        

           
        <h1 class="mb-4" style={{color:"#860E1C"}}>Pedido finalizado com sucesso!</h1>
       
        <ul class="shadow p-3 mb-5 bg-white rounded list-group list-group-horizontal-md d-flex justify-content-center ">
            
            
           
            <li className="teste list-group-item teste">
                
       <p style={{fontweight: "bold"}} > O numero do seu pedido é:  <p style={{fontweight: "bold", color: "#860E1C", fontsize: "24px"}} >2866344493</p> </p>
       <p style={{fontweight: "bold"}} >Obrigado por comprar no mestredasfacas.com.br</p>
    </li>
    <li class="teste list-group-item">
                
        
        <p style={{fontweight: "bold", fontsize: "18px"}} className="mt-5">Em breve você receberá um e-mail de confirmação com todas as informaçoes da 
            sua compra</p>
            
     </li>
            
          </ul>

       </div>

       <div class="mt-1 container">
        <div>
        <div><p style={{fontweight: "bold", color: "#860E1C", fontsize: "24px"}}>Detalhes do pedido:</p></div>
        
           <ul className="shadow p-3 mb-5 bg-white rounded list-group list-group-horizontal-md d-flex justify-content-center ">
               
           
               <li className="teste list-group-item teste">
                   
                   <div className="row g-3">
                       
                       <div className="col-4 col-md-3 col-lg-2">
                           <a href="./pdp.html">
   
                               <img width="100" src={imgProduct} class="img-thumbnail"/>
   
                           </a>
                           
   
                       </div>
                    
                       <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                           <p><b><a href="./pdp.html" className="text-produto-nome text-decoration-none text-danger">Nome do Produto</a></b></p>
                           <p style={{fontweight: "bold"}} className="text-produto-desc">
                               <small>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi delectus consequatur sed culpa accusamus alias?
                               </small>
                           </p>
                           
                       </div>
                       
                   </div>   
                   
       </li>
       
       <li className="teste list-group-item">
                   
           <p><b><a  className="text-produto-nome text-decoration-none text-danger">Endereço de entrega</a></b></p>
           <p style={{fontweight: "bold"}} className="mt-3">Rua xxxx, 00 <br></br> 00000-000 <br></br> Vila matilde - São Paulo - SP Entrega Normal:  até 15 dias uteis R$ 10,91 </p>
           
           <Button navigation route='/dashBoard/myOrders' label='Meus pedidos' class='btn-cancelar mx-1' sytle={{width: "100%"}}/>
           <Button navigation route='/' label='Realizar uma nova compra' class='btn-principal'/>
               
        </li>
             </ul>
             </div>
             <div><p style={{fontweight: "bold", color: "#860E1C", fontsize: "24px"}}>Forma de pagamento e entrega:</p></div>

             <ul class="shadow p-3 mb-5 bg-white rounded list-group list-group-horizontal-md d-flex justify-content-center">
            <li class="teste list-group-item">
                
                
             <img className="mt-4" style={{float: "left"}} src={imgCart} width="50"/>
             <h5 class="mt-4 mx-1"style={{float: "left", fontsize: "15"}}>4121 **** **** **** ****</h5>
    </li>
    <li class="teste list-group-item">
                
        
        <p style={{fontweight: "bold", fontsize: "15px" }} className=""> 5x de R$ 3.768.08 SEM JUROS</p>
        <p style={{fontweight: "bold", fontsize: "15px" }} class="">Valor total: R$ 18.810,91</p>
            
     </li>

     <li class="teste list-group-item">
                
        
        <img className="" style={{float: "left"}} src={imgfrete} width="100"/>
        <p style={{fontweight: "bold", fontsize: "18px", float: "left" }} class="mt-2">Expresso: <br></br>   5 dias uteis a partir da confirmação do pagamento</p>
            
     </li>
          </ul>
          </div>

        </>
    )
}

export default Success
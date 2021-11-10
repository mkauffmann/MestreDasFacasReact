import React from 'react'

import imgProduct from '../../../assets/imgs/Product/PRODUTO.jpg'
import './Product.css'







function Title(props) {

    return(
        <>

<li className="list-group-item py-3">
                <div className="row g-3">
                    <div className="col-4 col-md-3 col-lg-2">
                        <a href="./pdp.html">

                            <img width="100" src={imgProduct} class="img-thumbnail"/>

                        </a>
                        

                    </div>
                    <div className=" col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                        <h4><b><a href="./pdp.html" class=" text-produto-nome text-decoration-none text-danger">Nome do Produto</a></b></h4>
                        <h4 className=" textDescription text-produto-desc">
                            <small>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi delectus consequatur sed culpa accusamus alias, aliquam officiis totam magni voluptas similique. Officia ab natus neque temporibus rerum distinctio excepturi?
                            </small>
                        </h4>
                    </div>
                    <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3           offset-lg-0 col-xl-2 align-self-center mt-3">
                        <div  className="input ">
                            <button   type="button" className="   btn-custom">-</button>
                            <input style={{textAlign: "center"}} type="text" className="form-add   mx-1 " value="1"/>

                            <button  type="button" className=" btn-custom">+</button>
                            <button type="button" className="btn-custom2 mt-1 ">Remover</button>
  
    
                        </div>
                        <div className="text-right mt-2">
                            <small className="text-secondary">Subtotal: R$ 4.700,00</small><br></br>
                            <span className="text-dark">Valor Total: R$ 4.700,00</span>

                        </div>
                

                    </div>
                    

                </div>

                
                

            </li>






        </>
    )
}

export default Title
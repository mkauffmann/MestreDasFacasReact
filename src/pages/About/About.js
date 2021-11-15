import React from 'react';

import Logo from '../../assets/imgs/about/img-logo-mdf.png'

import '../About/About.css'

function About(props) {

    return (
        <>
            <div className="container mb-4"> 

                <div className="logo-about">
                    <img src={Logo} className="img-logo-about"/> 
                </div>
                
                <div className="row"> 
                    <h2 className="mb-4"> Quem somos </h2>
                </div> 
                <div className="row">
                    <p className="descricao-quem-somos"> 
                        Nós somos o mestre das facas e vendemos facas.
                    </p>
                </div>

                <div className="row"> 
                    <h2 className="mb-4"> Missão </h2>
                </div> 
                <div className="row">
                    <p className="descricao-quem-somos"> 
                        Lorem ipsum dolor sit amet, consectetur adipis.
                    </p>
                </div>

                <div className="row"> 
                    <h2 className="mb-4"> Visão </h2>
                </div> 
                <div className="row">
                    <p className="descricao-quem-somos"> 
                        Lorem ipsum dolor sit amet, consectetur adipis.
                    </p>
                </div>

                <div className="row"> 
                    <h2 className="mb-4"> Valores </h2>
                </div> 
                <div className="row">
                    <p className="descricao-quem-somos"> 
                        Lorem ipsum dolor sit amet, consectetur adipis.
                    </p>
                </div>

                
            
            
            </div>
        </>
    )


}

export default About;
import React from "react"

import Button from '../../../../micro/Button/Button'

function InfoItem(props){
    const infoType = () => {
        if(props.type == 'card'){
            return (
                <div className="card-lista d-flex flex-column">
                <div className="nome-lista"><h5>Cartão principal</h5></div>
                <div className="numero-cartao"><strong>XXXX-XXXX-XXXX-6888</strong></div>
                <div className="infos-titular d-flex flex-column  mt-1">
                    <div className="titular-cartao">NOME DO TITULAR</div>
                    <div className="cpf-titular"><strong>CPF:</strong> 123.456.789-09</div>
                    <div className="validade"><strong>Validade: </strong>02/22</div>
                    <div className="codigo"><strong>CVV: </strong>123</div>
                </div>
                <Button class="btn-cancelar align-self-end btn-ver-lista" label="Editar"/>
            </div>
            )
        } else if (props.type == 'address'){
            return (
            <div className="card-lista d-flex flex-column">
                <div className="nome-endereco"><h5>Trabalho</h5></div>
                <div className="infos-endereco d-flex flex-column  mt-1">
                    <div className="logradouro">Rua Capitão Macedo</div>
                    <div className="numero"><strong>Número:</strong> 580</div>
                    <div className="complemento"><strong>Complemento: </strong>Laboratório - Galpão 1</div>
                    <div className="cep"><strong>CEP: </strong>0000-000</div>
                    <div className="cidade"><strong>Cidade: </strong>São Paulo/SP</div>
                </div>
                <button className="btn-cancelar align-self-end btn-ver-lista">Editar</button>
            </div>
            )
        }
    }


    return (
        <>
            {infoType()}
        </>
    )
}

export default InfoItem
import React from "react"


function InfoItem(props){

    const renderCard = (type, data, key) => {
        switch(type){
            case 'cartão':
                return renderCreditCardItem(data, key)
            case 'endereço':
                return renderAddressItem(data, key)
            case 'telefone':
                return renderTelephoneItem(data, key)
            default:
                return ""
        }
    }

    const renderCreditCardItem = (creditCard, key) => {
        console.log(key)
        return (
            <div className="card-lista d-flex flex-column mb-3" key={key}>
                <div className="nome-lista"><h5>{creditCard.cardBrand.cardBrandName}</h5></div>
                 <div className="numero-cartao"><strong>**** **** **** {creditCard.cardNumber.slice(-4)}</strong></div>
                 <div className="infos-lista d-flex flex-column  mt-1">
                     <div><strong>Titular:</strong> {creditCard.holderName}</div>
                     <div><strong>CPF:</strong> {creditCard.cpf}</div>
                     <div><strong>Validade: </strong>{creditCard.cardValidDate}</div>
                 </div>
                <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista">Editar</button>
             </div>
        )
    }

    const renderAddressItem = (address, key) => {
        return (
            <div className="card-lista d-flex flex-column mb-3" key={key}>
                 <div className="infos-lista d-flex flex-column  mt-1">
                     <div><strong>Logradouro:</strong> {address.street}</div>
                     <div><strong>Número:</strong> {address.number}</div>
                     {address.complement !== "" ? <div><strong>Complemento: </strong>{address.complement}</div> : ""}
                     <div><strong>CEP: </strong>{address.cep}</div>
                     <div><strong>Cidade: </strong>{address.city.cityName}/{address.state.uf}</div>
                 </div>
                 <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista">Editar</button>
             </div>
        )
    }

    const renderTelephoneItem = (telephone, key) => {
        return (
            <div className="card-lista d-flex flex-column mb-3" key={key}>
            <div className="infos-lista d-flex flex-column  mt-1">
                <div><strong>DDD:</strong> {telephone.ddd}</div>
                <div><strong>Número:</strong> {telephone.phoneNumber}</div>
            </div>
            <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista">Editar</button>
        </div>
        )
    }

    return (
        <>
            {renderCard(props.type, props.obj, props.key)}
        </>
    )
}

export default InfoItem
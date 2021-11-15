import React, { useState } from "react"
import axios from "axios"
import { Modal } from "react-bootstrap"
import useLogin from "../../../../../hooks/useLogin"

function InfoItem(props) {
    const { token, userId } = useLogin()
    const [deleteModal, setDeleteModal] = useState(false)
    const handleCloseModal = () => setDeleteModal(false)
    const handleOpenModal = () => setDeleteModal(true)
    let url = ""

    const refreshPage = () => {
        window.location.reload();
    }

    const renderCard = (type, data, key) => {
        switch (type) {
            case 'cartão':
                url = `http://localhost:8080/customers/removeCreditCard/?customer=${userId}&creditCard=${data.id}`
                return renderCreditCardItem(data, key)
            case 'endereço':
                url = `http://localhost:8080/customers/removeAddress?customer=${userId}&address=${data.id}`
                return renderAddressItem(data, key)
            case 'telefone':
                url = `http://localhost:8080/customers/removeTelephone?customer=${userId}&telephone=${data.id}`
                return renderTelephoneItem(data, key)
            default:
                return ""
        }
    }

    const renderCreditCardItem = (creditCard, key) => {
        console.log(key)
        return (
            <div className="card-lista d-flex flex-row mb-3 justify-content-between" key={key}>
                <div className="infos-lista d-flex flex-column  mt-1">
                    <div className="nome-lista"><h5>{creditCard.cardBrand.cardBrandName}</h5></div>
                    <div className="numero-cartao"><strong>**** **** **** {creditCard.cardNumber.slice(-4)}</strong></div>
                    <div className="infos-lista d-flex flex-column  mt-1">
                        <div><strong>Titular:</strong> {creditCard.holderName}</div>
                        <div><strong>CPF:</strong> {creditCard.cpf}</div>
                        <div><strong>Validade: </strong>{creditCard.cardValidDate}</div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-between">
                    <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista">Editar</button>
                    <button className="btn-custom-default btn-cancelar2 align-self-end btn-ver-lista" onClick={() => deleteModal = true}>Remover</button>
                </div>

            </div>
        )
    }

    const renderAddressItem = (address, key) => {
        return (
            <div className="card-lista d-flex flex-row mb-3 justify-content-between" key={key}>
                <div className="infos-lista d-flex flex-column  mt-1">
                    <div><strong>Logradouro:</strong> {address.street}</div>
                    <div><strong>Número:</strong> {address.number}</div>
                    {address.complement !== "" ? <div><strong>Complemento: </strong>{address.complement}</div> : ""}
                    <div><strong>CEP: </strong>{address.cep}</div>
                    <div><strong>Cidade: </strong>{address.city.cityName}/{address.state.uf}</div>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-between">
                    <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista">Editar</button>
                    <button className="btn-custom-default btn-cancelar2 align-self-end btn-ver-lista" onClick={() => handleOpenModal()}>Remover</button>
                </div>
            </div>
        )
    }

    const renderTelephoneItem = (telephone, key) => {
        return (
            <div className="card-lista d-flex flex-row mb-3 justify-content-between" key={key}>
                <div className="infos-lista d-flex flex-column  mt-1">
                    <div><strong>DDD:</strong> {telephone.ddd}</div>
                    <div><strong>Número:</strong> {telephone.phoneNumber}</div>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-between">
                    <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista">Editar</button>
                    <button className="btn-custom-default btn-cancelar2 align-self-end btn-ver-lista" onClick={() => deleteModal = true}>Remover</button>
                </div>
            </div>
        )
    }

    const handleDelete = () => {
        console.log("oi")
        axios.put(url, {}, {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then(() => refreshPage())
    }

    return (
        <>
            <Modal show={deleteModal}>
                <Modal.Body>
                    <p className="text-center">Confirma a remoção do {props.type}?</p>
                    <div className="d-flex flex-row align-items-end justify-content-around">
                        <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista" onClick={() => handleCloseModal()}>Cancelar</button>
                        <button className="btn-custom-default btn-cancelar2 align-self-end btn-ver-lista" onClick={() => handleDelete()}>Remover</button>
                    </div>
                </Modal.Body>
            </Modal>
            {renderCard(props.type, props.obj, props.key)}
        </>
    )
}

export default InfoItem
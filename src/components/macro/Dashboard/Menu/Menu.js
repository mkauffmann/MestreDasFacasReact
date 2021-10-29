import React from 'react'
import './Menu.css'
import {ReactComponent as UserIcon} from '../../../../assets/icons/dashboard/user.svg'
import {ReactComponent as ArrowIcon} from '../../../../assets/icons/dashboard/arrow.svg'

function DashboardMenu(props) {

    return(
        <>
            <div className="row menu-mobile d-lg-none">
                <div className="menu-mobile-header col-12 d-flex justify-content-between align-items-center">
                    <div className="id-usuario d-flex">
                        <UserIcon/>
                        <h4 className="d-inline-block ms-2 mb-0">Nome do usuário</h4>
                    </div>
                    <div className="btn-arrow">
                         <ArrowIcon/>
                    </div>
                </div>
                <div className="col-12 menu-mobile-items-container menu-fechado">
                    <ul className="menu-items">
                        <li className="menu-item"><a href="#" onclick="mostrarDados();">Meus Dados</a></li>
                        <li className="menu-item"><a href="#" onclick="mostrarPedidos();">Meus Pedidos</a></li>
                        <li className="menu-item"><a href="#" onclick="mostrarCartoes();">Cartões Salvos</a></li>
                        <li className="menu-item"><a href="#" onclick="mostrarEnderecos();">Endereços</a></li>
                        <li className="menu-item"><a href="#" onclick="mostrarListas();">Minhas Listas</a></li>
                        <li className="menu-item"><a href="">Sair</a></li>
                    </ul>
                </div>
            </div>
            <div className="menu-lateral-container col-lg-3 d-none d-lg-block">
                <div className="menu-lateral mt-5">
                    <div className="id-usuario-desktop d-flex justify-content-around align-items-center">
                        <UserIcon/>
                        <h3 className="d-inline-block ms-2 mb-0 text-center">Nome do usuário</h3>
                    </div>
                    <div className="col-12 menu-items-container">
                        <ul className="menu-items">
                            <li className="menu-item"><a href="#" onclick="mostrarDados();">Meus Dados</a></li>
                            <li className="menu-item"><a href="#" onclick="mostrarPedidos();">Meus Pedidos</a></li>
                            <li className="menu-item"><a href="#" onclick="mostrarCartoes();">Cartões Salvos</a></li>
                            <li className="menu-item"><a href="#" onclick="mostrarEnderecos();">Endereços</a></li>
                            <li className="menu-item"><a href="#" onclick="mostrarListas();">Minhas Listas</a></li>
                            <li className="menu-item"><a href="">Sair</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardMenu
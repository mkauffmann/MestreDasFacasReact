import React from 'react'
import {
    Link,
    useRouteMatch
  } from "react-router-dom";
<<<<<<< HEAD

function MenuItems(props) {
    let {url} = useRouteMatch()
=======
  import useLogin from '../../../../hooks/useLogin';

function MenuItems(props) {
    let {url} = useRouteMatch()
    const {logout} = useLogin()
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858

    return (
        <ul className="menu-items">
            <li className="menu-item" onClick={() => props.toggleMobileMenu && props.toggleMobileMenu()}><Link to={`${url}/userForm`}>Meus Dados</Link></li>
            <li className="menu-item" onClick={() => props.toggleMobileMenu && props.toggleMobileMenu()}><Link to={`${url}/myOrders`}>Meus Pedidos</Link></li>
            <li className="menu-item" onClick={() => props.toggleMobileMenu && props.toggleMobileMenu()}><Link to={`${url}/myCards`}>Meus Cartões</Link></li>
            <li className="menu-item" onClick={() => props.toggleMobileMenu && props.toggleMobileMenu()}><Link to={`${url}/myAddresses`}>Meus Endereços</Link></li>
            <li className="menu-item" onClick={() => props.toggleMobileMenu && props.toggleMobileMenu()}><Link to={`${url}/myTelephones`}>Meus Telefones</Link></li>
<<<<<<< HEAD
            <li className="menu-item" onClick={() => props.toggleMobileMenu && props.toggleMobileMenu()}><a href="">Sair</a></li>
=======
            <li className="menu-item" onClick={() => logout() && props.toggleMobileMenu && props.toggleMobileMenu()}><a href="">Sair</a></li>
>>>>>>> 66a110f20f57a952f55ca29db1a6a8d3a2c35858
        </ul>
    )
}

export default MenuItems
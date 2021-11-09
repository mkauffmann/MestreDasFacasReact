import React from 'react'
import {
    Link,
    useRouteMatch
  } from "react-router-dom";

function MenuItems() {
    let {url} = useRouteMatch()

    return (
        <ul className="menu-items">
            <li className="menu-item"><Link to={`${url}/userForm`}>Meus Dados</Link></li>
            <li className="menu-item"><Link to={`${url}/myOrders`}>Meus Pedidos</Link></li>
            <li className="menu-item"><Link to={`${url}/myCards`}>Meus Cartões</Link></li>
            <li className="menu-item"><Link to={`${url}/myAddresses`}>Meus Endereços</Link></li>
            <li className="menu-item"><Link to={`${url}/myTelephones`}>Meus Telefones</Link></li>
            <li className="menu-item"><a href="">Sair</a></li>
        </ul>
    )
}

export default MenuItems
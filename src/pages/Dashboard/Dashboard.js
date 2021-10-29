import React from 'react'
import './Dashboard.css'

import DashboardMenu from '../../components/macro/Dashboard/Menu/Menu'
import UserForm from '../../components/macro/Dashboard/UserForm/UserForm'
import OrderList from '../../components/macro/Dashboard/OrderList/OrderList'
import InfoList from '../../components/macro/Dashboard/InfoList/InfoList'
import WishLists from '../../components/macro/Dashboard/WishLists/WishLists'

function Dashboard(props) {

    return(
        <>
        <div>Dashboard</div>
        <DashboardMenu/>
        <WishLists/>
        {/* <InfoList type='card'/>
        <InfoList type='address'/> */}
        {/* <CardList/> */}
        {/* <OrderList/> */}
        {/* <UserForm/> */}
        </>
    )
}

export default Dashboard
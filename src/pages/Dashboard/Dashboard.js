import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import axios from 'axios';

import useLogin from "../../hooks/useLogin"

import './Dashboard.css'
import DashboardMenuMobile from '../../components/macro/Dashboard/Menu/DashboardMenuMobile'
import DashboardMenuDesktop from '../../components/macro/Dashboard/Menu/DashboardMenuDesktop'
import UserForm from '../../components/macro/Dashboard/UserForm/UserForm'
import OrderList from '../../components/macro/Dashboard/OrderList/OrderList'
import InfoList from '../../components/macro/Dashboard/InfoList/InfoList'
import ComponentCard from '../../components/macro/Dashboard/ComponentCard/ComponentCard'



function Dashboard(props) {
    const {userId, token, logout} = useLogin()
    const getUrl = `http://localhost:8080/customers/${userId}`
    
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { url } = useRouteMatch()
    
    const getUser = () => axios.get(getUrl, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    .then(response => {
        setUser({...response.data})
        setIsLoading(false)
    })
    .catch(error => {
        logout()
    })

    const renderUser = async () => await getUser()

    useEffect(() => {
        renderUser()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <DashboardMenuMobile username={user.name} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-between">
                        <DashboardMenuDesktop username={user.name}/>
                        <ComponentCard>
                            <Switch>
                                <Route path={`${url}/userForm`}>
                                    <UserForm userData={user} isLoading={isLoading}/>
                                </Route>
                                <Route path={`${url}/myOrders`}>
                                    <OrderList />
                                </Route>
                                <Route path={`${url}/myCards`}>
                                    <InfoList type="cartão" title="Meus Cartões" userData={user} isLoading={isLoading}/>
                                </Route>
                                <Route path={`${url}/myAddresses`}>
                                    <InfoList type="endereço" title="Meus Endereços" userData={user} isLoading={isLoading} />
                                </Route>
                                <Route path={`${url}/myTelephones`}>
                                    <InfoList type="telefone" title="Meus Telefones" userData={user} isLoading={isLoading}/>
                                </Route>
                            </Switch>
                        </ComponentCard>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard
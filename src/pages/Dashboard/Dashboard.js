import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import './Dashboard.css'
import DashboardMenuMobile from '../../components/macro/Dashboard/Menu/DashboardMenuMobile'
import DashboardMenuDesktop from '../../components/macro/Dashboard/Menu/DashboardMenuDesktop'
import UserForm from '../../components/macro/Dashboard/UserForm/UserForm'
import OrderList from '../../components/macro/Dashboard/OrderList/OrderList'
import InfoList from '../../components/macro/Dashboard/InfoList/InfoList'
import ComponentCard from '../../components/macro/Dashboard/ComponentCard/ComponentCard'


function Dashboard(props) {
    let { url } = useRouteMatch()

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <DashboardMenuMobile username={"Fulana Gomes"} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-between">
                        <DashboardMenuDesktop username={"Fulana Gomes"}/>
                        <ComponentCard>
                            <Switch>
                                <Route path={`${url}/userForm`}>
                                    <UserForm />
                                </Route>
                                <Route path={`${url}/myOrders`}>
                                    <OrderList />
                                </Route>
                                <Route path={`${url}/myCards`}>
                                    <InfoList type='card' />
                                </Route>
                                <Route path={`${url}/myAddresses`}>
                                    <InfoList type='address' />
                                </Route>
                                <Route path={`${url}/myTelephones`}>
                                    <InfoList type='telephone' />
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
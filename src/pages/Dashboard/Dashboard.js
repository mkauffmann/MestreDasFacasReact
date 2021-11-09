import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

import './Dashboard.css'
import DashboardMenuMobile from '../../components/macro/Dashboard/Menu/DashboardMenuMobile'
import DashboardMenuDesktop from '../../components/macro/Dashboard/Menu/DashboardMenuDesktop'
import UserForm from '../../components/macro/Dashboard/UserForm/UserForm'
import OrderList from '../../components/macro/Dashboard/OrderList/OrderList'
import InfoList from '../../components/macro/Dashboard/InfoList/InfoList'
import ComponentCard from '../../components/macro/Dashboard/ComponentCard/ComponentCard'

const userTemp = {
    "name": "Maria Kauffmann",
    "email": "maria@gmail",
    "cpf": "122.223.344-55",
    "birthDate": "1992-06-13",
    "password": "123",
    "telephones": [
      {
        "ddd": "11",
        "phoneNumber": "111111111"
      }
    ],
    "gender": {
      "description": "Feminino"
    },
    "addresses": [
      {
        "street": "Praça da Sé",
        "number": "02",
        "complement": "",
        "cep": "01001-001",
        "neighborhood": "Sé",
        "city": {
          "cityName": "São Paulo"
        },
        "state": {
          "uf": "SP"
        }
      }
    ],
    "creditCards": [
      {
        "cardNumber": "4111 1111 1111 1111",
        "cardValidDate": "12/21",
        "holderCpf": "123.456.787-87",
        "holderName": "Maria Kauffmann",
        "cardBrand": {
          "cardBrandName": "VISA"
        }
      }
    ],
    "id": 2
}

function Dashboard(props) {
    let { url } = useRouteMatch()
    let user = userTemp

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
                                    <UserForm userData={user}/>
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
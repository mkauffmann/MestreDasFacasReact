import React from "react"
import { Switch, Route} from "react-router-dom"
import PrivateRoute from "./components/macro/Route/PrivateRoute"
import OrderDetailsRoute from "./components/macro/Route/OrderDetailsRoute"

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Category from './pages/Category/Category'
import Checkout from './pages/Checkout/Checkout'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'
import Register from './pages/Register/Register'
import Success from './pages/Success/Success'
import OrderDetails from "./pages/OrderDetails/OrderDetails"
import NotFound from "./pages/NotFound/NotFound"
import Contact from "./pages/Contact/Contact"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import ChangePassword from "./pages/ChangePassword/ChangePassword"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/category" component={Category}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/contact" component={Contact} />
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/login" component={Login}/>
            <Route path="/product/:id" component={Product}/>
            <Route path="/register" component={Register}/>
            <Route path="/success" component={Success}/>
            <OrderDetailsRoute path="/orderDetails" component={OrderDetails}/>
            <Route path="/changePassword/:id" component={ChangePassword} />
            <Route component={NotFound}/>
        </Switch>
    )
}
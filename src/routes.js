import React from "react"
import { Switch, Route} from "react-router-dom"

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
import About from "./pages/About/About"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import ChangePassword from "./pages/ChangePassword/ChangePassword"
import Home2 from "./pages/Home/Home2"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home2} exact/>
            <Route path="/home" component={Home2}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/category" component={Category}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/contact" component={Contact} />
            <Route path="/dashboard/:id" component={Dashboard}/>
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/login" component={Login}/>
            <Route path="/product/:id" component={Product}/>
            <Route path="/register" component={Register}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/success" component={Success}/>
            <Route path="/orderDetails" component={OrderDetails}/>
            <Route path="/about" component={About}/>
            <Route path="/changePassword/:id" component={ChangePassword} />
            <Route component={NotFound}/>
            
        </Switch>
    )
}
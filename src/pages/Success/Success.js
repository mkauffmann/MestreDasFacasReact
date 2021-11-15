import React from 'react'
import PayMentForm from '../../components/micro/TotalValueSuccess/PayMentForm'
import OrderCode from '../../components/OrderCode/OrderCode'
import OrderDetails from '../../components/OrderDetails/OrderDetails'
import './Success.css'





function Success(props) {

    return (
        <>

            <OrderCode/>
            <div class="mt-1 container">
                <div>
                    <OrderDetails/>
                </div>
               <PayMentForm/>
            </div>

        </>
    )
}

export default Success
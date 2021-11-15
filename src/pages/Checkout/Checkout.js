import React from 'react'
import './Checkout.css'
import axios from 'axios'

function Checkout(props) {

    const getRequest = () => {
        axios.get('http://localhost:8080/ItemRequest').then((response) => {
            getRequest(response.data)
        })
    }

    return(

        
        <>
        
        </>
    )
}

export default Checkout
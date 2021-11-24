import React, { useState, useEffect } from 'react'



function QtyCart() {
    const [qtyCart, setQtyCart] = useState(0)

    function refreshPage() {
        window.location.reload(false);
    }


    useEffect(() => {

        setQtyCart(JSON.parse(localStorage.getItem('qtyCart')))

    }, [])
    
    return localStorage.getItem('qtyCart')
    
}

export default QtyCart
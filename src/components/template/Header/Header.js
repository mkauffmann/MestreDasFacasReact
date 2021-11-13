import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {

    return(
        <>
        <div>Header
            <Link to="/dashboard" >Dashboard</Link>
        </div>
        </>
    )
}

export default Header
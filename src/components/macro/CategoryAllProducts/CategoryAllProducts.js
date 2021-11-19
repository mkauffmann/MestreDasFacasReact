import React from 'react';
import { Link } from 'react-router-dom'


function CategoryAllProducts(props) {

    const produtos = props.produtos || []

    return (
        <>

            <div className="container col-2 navegacao"> <Link to="/category/allProducts" className="navegacao"> Todas as Facas </Link> </div>


        </>
    )



}

export default CategoryAllProducts
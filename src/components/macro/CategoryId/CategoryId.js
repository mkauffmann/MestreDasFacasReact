import React from "react";
import { Link } from "react-router-dom";

function CategoryId(props) {
    
    const categorias = [...props.categorias] || []

    return (
        <>
        {
            categorias.map(ctg => {
                return (
                    <div className="container col-2 navegacao"><Link to={'/category/' + ctg.id} className="navegacao"> {ctg.description_category} </Link></div>
                )
            })
        }
            
         
        </>
    )
}

export default CategoryId;
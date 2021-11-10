import React from "react";
import UpdateUserDataForm from "../../Forms/Update/UpdateUserDataForm";


function UserForm(props) {
    return (
        <>
            <h3 className="mb-3">Editar meus dados</h3>
            <UpdateUserDataForm userData={props.userData} />
        </>

    )
}

export default UserForm
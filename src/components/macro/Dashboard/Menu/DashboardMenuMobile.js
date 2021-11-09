import React from 'react'
import MenuItems from './MenuItems'
import './Menu.css'
import {ReactComponent as UserIcon} from '../../../../assets/icons/dashboard/user.svg'
import {ReactComponent as ArrowIcon} from '../../../../assets/icons/dashboard/arrow.svg'

function DashboardMenuMobile(props) {

    return(
        <>
            <div className="row menu-mobile d-lg-none">
                <div className="menu-mobile-header col-12 d-flex justify-content-between align-items-center">
                    <div className="id-usuario d-flex">
                        <UserIcon/>
                        <h4 className="d-inline-block ms-2 mb-0">{props.username}</h4>
                    </div>
                    <div className="btn-arrow">
                         <ArrowIcon/>
                    </div>
                </div>
                <div className="col-12 menu-mobile-items-container menu-fechado">
                    <MenuItems/>
                </div>
            </div>
        </>
    )
}

export default DashboardMenuMobile
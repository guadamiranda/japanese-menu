import React from "react"
import {useLocation} from 'react-router-dom';
import { MenuImage } from "../../Components/MenuImage/MenuImage.tsx"
import './menu.scss'

interface IMenu {
    menu?: Object
}

export const Menu: React.FC<IMenu> = (menu) => {
    const location = useLocation();
    const menuInformation = location.state.menu

    return(
        <div className='menu'>
            <div className='menu__image'>
                <MenuImage type={menuInformation.type}/>           
            </div>
        </div>
    )
}
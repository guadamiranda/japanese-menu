import React, { useEffect, useState } from "react"
import {useLocation} from 'react-router-dom';
import { MenuImage } from "../../Components/MenuImage/MenuImage.tsx"
import { Loader } from "../../Components/Loader/Loader.tsx";
import './menu.scss'

interface IMenu {
    menu?: Object
}

export const Menu: React.FC<IMenu> = (menu) => {
    const [isLoading, setIsLoading] = useState(true)
    const location = useLocation();
    const menuInformation = location.state.menu

    useEffect(() => {
        setIsLoading(true);
        setTimeout(function(){
            setIsLoading(false);
        }, 2000)
    }, [menuInformation])

    return(
        <div className='menu'>
            {isLoading ? 
            
            <>
                <Loader/>
            </> 
            
            : 
            
            <>
                <br></br>
                <div className='menu__image'>
                    <MenuImage type={menuInformation.type}/>           
                </div>
            </> }
        </div>
    )
}
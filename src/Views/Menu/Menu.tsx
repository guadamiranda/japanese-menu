import React, { useEffect, useState } from "react"
import {useLocation} from 'react-router-dom';
import { MenuImage } from "../../Components/MenuImage/MenuImage.tsx"
import { Loader } from "../../Components/Loader/Loader.tsx";
import { NameFood } from "../../Components/NameFood/NameFood.tsx";
import { FoodDetails } from "../../Components/FoodDetails/FoodDetails.tsx";
import { SomeExamples } from "../../Components/SomeExamples/SomeExamples.tsx";
import { Ingredients } from "../../Components/Ingredients/Ingredients.tsx";
import './menu.scss'

interface IMenu {
    menu?: Object
}

export const Menu: React.FC<IMenu> = (menu) => {
    const [isLoading, setIsLoading] = useState(true)
    const location = useLocation();
    const menuInformation = location.state.menu
    console.log(menuInformation)

    useEffect(() => {
        setIsLoading(true);
        setTimeout(function(){
            setIsLoading(false);
        }, 2500)
    }, [menuInformation])

    return(
        <div className='menu'>
            {isLoading ? 
            
            <div className='menu__loaderContainer'>
                <Loader type={menuInformation.type}/>
            </div> 
            
            : 
            
            <>
                <br></br>

                <div className='menu__image'>
                    <MenuImage type={menuInformation.type}/>  
                </div>

                <br></br>

                <div className='menu__foodInformation'>
                    <NameFood name={menuInformation.name} type={menuInformation.type}/>
                    <FoodDetails isTaccfood={menuInformation.isTaccFood} isVegan={menuInformation.isVegan} temperature={menuInformation.temperature} price={menuInformation.price}/>
                </div>

                <br></br>
                <br></br>

                <div className='menu__someExamples'>
                    <SomeExamples photos={menuInformation.photos}/>
                </div>

                <br></br>
                <br></br>

                <div className='menu__ingredients'>
                    <Ingredients photos={menuInformation.ingredients}/>
                </div>

            </> }
        </div>
    )
}
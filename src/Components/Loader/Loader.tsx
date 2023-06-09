import React from "react"
import { MdOutlineRamenDining, MdOutlineIcecream } from 'react-icons/md'
import { BiSushi, BiDrink } from 'react-icons/bi'
import './loader.scss'

interface ILoader {
    type: String
}

export const Loader: React.FC<ILoader> = ({type}) => {

    const IconSelector = () => {
        const iconFoods = [{name: 'ramen', icon: <MdOutlineRamenDining/>},
                           {name: 'sushi', icon: <BiSushi/>},
                           {name: 'drink', icon: <BiDrink/>},
                           {name: 'dessert', icon: <MdOutlineIcecream/>}];
        
        const selectedIcon = iconFoods.find((icon) => icon.name === type)

        return(
            <div className="loader__iconAnimation">{selectedIcon.icon}</div>
        )    
    }

    return(
        <div className="loader">
            <IconSelector ></IconSelector>
            <span>Preparing your food</span>
        </div>
    )
}
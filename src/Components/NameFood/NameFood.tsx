import React from "react";
import './nameFood.scss'

import { MdOutlineRamenDining, MdOutlineIcecream } from 'react-icons/md'
import { BiSushi, BiDrink } from 'react-icons/bi'

interface INameFood {
    name: String;
    type: String;
}

export const NameFood: React.FC<INameFood> = ({name, type}) => {

    const IconSelector = () => {
        const iconFoods = [{name: 'ramen', icon: <MdOutlineRamenDining/>},
                           {name: 'sushi', icon: <BiSushi/>},
                           {name: 'drink', icon: <BiDrink/>},
                           {name: 'dessert', icon: <MdOutlineIcecream/>}];
        
        const selectedIcon = iconFoods.find((icon) => icon.name === type)

        return(
            <div className='selectedIconFood'>{selectedIcon.icon}</div>
        )    
    }

    return(
        <div className="nameFood">
            <IconSelector></IconSelector>
            <span>- {name} -</span>
        </div>
    )
}
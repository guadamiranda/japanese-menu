import React from 'react'
import './menuImage.scss'
import ramen from "../../Assets/Img/ramen5.jpg"
import sushi from '../../Assets/Img/sushi5.jpg'
import drink from '../../Assets/Img/drink2.jpg'
import dessert from '../../Assets/Img/dessert1.jpg'

interface IMenuImage {
    type: String
}

export const MenuImage: React.FC<IMenuImage> = (type) => {
    
    const SelectImage = (prop) => {
        const typeFood = prop.typeFood.type;

        const foods = [{name:'ramen', img: ramen, text:'拉麺'},
                       {name:'sushi', img: sushi, text:'寿司'},
                       {name:'drink', img: drink, text:'飲む'},
                       {name:'dessert', img: dessert, text:'デザート'}]

        const selectedFood = foods.find(food => food.name === typeFood)
        
        return(
            <>
                <img src={selectedFood?.img} alt='foodImg'></img>
                <span>-{selectedFood?.text}-</span>
            </>
            
        )
    }

    return(
        <div className="menuImage">
            <SelectImage typeFood={type}/>
        </div>
    )
}
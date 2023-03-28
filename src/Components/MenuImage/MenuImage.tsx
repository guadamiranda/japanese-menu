import React from 'react'
import './menuImage.scss'

interface IMenuImage {
    type: String
}

export const MenuImage: React.FC<IMenuImage> = (type) => {
    
    const SelectImage = (prop) => {
        const typeFood = prop.typeFood.type;
        let typeFoodImage = '';

        const allTypeFoods = ['ramen', 'sushi', 'drink', 'dessert'];
        const allTypeFoodImage = ["../../Assets/Img/ramen1.jpg", '../../Assets/Img/sushi1.jpg', '../../Assets/Img/drink1.jpg', '../../Assets/Img/dessert.jpg']
           
        for(let i = 0; i <= allTypeFoods.length; i++){
             if (allTypeFoods[i] == typeFood) typeFoodImage = allTypeFoodImage[i]
        }

        console.log(typeFoodImage)
        
        return(
            <img src="ramen1.jpg"></img>
        )
    }
    return(
        <div className="menuImage">
            <SelectImage typeFood={type}/>
        </div>
    )
}
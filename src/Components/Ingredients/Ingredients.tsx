import React from "react";
import './ingredients.scss'

interface Iingredients {
    ingredients: Array<string>
}

export const Ingredients: React.FC<Iingredients> = ({ingredients}) => {
    console.log(ingredients)
    return(
        <div className="ingredients">
            <span className='ingredients__title'><i><b>I</b>ngredients</i></span>
            <div className='ingredients__imagensContainer'>
                <img alt="food1" ></img>
            </div>
        </div>
    )
}
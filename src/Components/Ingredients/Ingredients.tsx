import React from "react";
import './ingredients.scss'

import { Card } from "../Card/Cards.tsx";

interface Iingredients {
    ingredients: Array<string>
}

export const Ingredients: React.FC<Iingredients> = ({ingredients}) => {
    return(
        <div className="ingredients">
            <span className='ingredients__title'><i>- <b>I</b>ngredients -</i></span>
            <div className='ingredients__imagensContainer'>
                {ingredients.map((ingredient) => <Card name={ingredient.name}/>)}
            </div>
        </div>
    )
}
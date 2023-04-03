import React from "react";
import './ingredients.scss'

import { Card } from "../Card/Cards.tsx";

type details = {
    name: string, 
    url: string
}
interface Iingredients {
    ingredients: Array<details>
}

export const Ingredients: React.FC<Iingredients> = ({ingredients}) => {
    console.log(ingredients)
    return(
        <div className="ingredients">
            <span className='ingredients__title'><i>- <b>I</b>ngredients -</i></span>
            <div className='ingredients__imagensContainer'>
                {ingredients.map((ingredient) => <Card name={ingredient.name} url={ingredient.url}/>)}
            </div>
        </div>
    )
}
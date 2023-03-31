import React from "react"
import './card.scss'
import { VscCircleFilled } from 'react-icons/vsc'

interface ICard {
    name: String; 
    url: String;
}

export const Card: React.FC<ICard> = ({name, url}) => {
    return(
        <div className="card">
            <img alt='ingredientImg'></img>
            <div className="card__information">
                <VscCircleFilled className='card__icon'/>
                <span>{name}</span>
                <VscCircleFilled className='card__icon'/>
            </div>
        </div>
    )
}
import React from "react"
import './card.scss'
import { VscCircleFilled } from 'react-icons/vsc'

interface ICard {
    name: string; 
    url: string;
}

export const Card: React.FC<ICard> = ({name, url}) => {
    return(
        <div className="card">
            <img src={url} alt='ingredient'></img>
            <div className="card__information">
                <VscCircleFilled className='card__icon'/>
                <span>{name}</span>
                <VscCircleFilled className='card__icon'/>
            </div>
        </div>
    )
}
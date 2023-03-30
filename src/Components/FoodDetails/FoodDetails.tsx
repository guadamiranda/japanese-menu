import React from "react"
import './foodDetails.scss'

interface IFoodDetails {
    isTaccfood: String,
    isVegan: String,
    temperature: String,
    price: String,
}

export const FoodDetails: React.FC<IFoodDetails> = ({isTaccfood, isVegan, temperature, price}) => {

    return(
        <div className="foodDetails">
            <div>
                <span className='foodDetails__title'>- Price -</span>
                <span className='foodDetails__details'>{price}</span>
            </div>
            <span className='foodDetails__divider'>|</span>
            <div>
                <span className='foodDetails__title'>- Temperature -</span>
                <span className='foodDetails__details'>{temperature}</span>
            </div>
            <span className='foodDetails__divider'>|</span>
            <div>
                <span className='foodDetails__title'>- Is Vegan? -</span>
                <span className='foodDetails__details'>{isVegan}</span>
            </div>
            <span className='foodDetails__divider'>|</span>
            <div>
                <span className='foodDetails__title'>- Is a TACC food? -</span>
                <span className='foodDetails__details'>{isTaccfood}</span>    
            </div>
        </div>
    )
}
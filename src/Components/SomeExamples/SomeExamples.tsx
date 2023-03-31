import React from "react";
import './someExamples.scss'

interface IsomeExamples {
    photos: Array<string>
}

export const SomeExamples: React.FC<IsomeExamples> = ({photos}) => {
    console.log(photos)
    return(
        <div className="someExamples">
            <span className='someExamples__title'><i>- <b>S</b>ome examples -</i></span>
            <div className='someExamples__imagensContainer'>
                <img alt="food1" src={photos[0]}></img>
                <img alt="food2" src={photos[1]}></img>
                <img alt="food3" src={photos[2]}></img>
            </div>
        </div>
    )
}
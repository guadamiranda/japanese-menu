import React from "react";
import './someExamples.scss'

interface IsomeExamples {

}

export const SomeExamples: React.FC<IsomeExamples> = ({}) => {
    return(
        <div className="someExamples">
            <span className='someExamples__title'><i><b>S</b>ome examples</i></span>
            <div className='someExamples__imagensContainer'>
                <img alt="food1"></img>
                <img alt="food2"></img>
                <img alt="food3"></img>
            </div>
        </div>
    )
}
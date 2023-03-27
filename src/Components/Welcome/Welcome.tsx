import React from 'react'
import './welcome.scss'

interface IWelcome {
    name: String
}

export const Welcome: React.FC<IWelcome> = ({name}) => {
    return(
        <div className='welcome'>
            <div className='welcome__right-side'>
                <span>食</span>
                <span>べ</span>
                <span>物</span>
            </div>
            <div className='welcome__center-side'>
                <span className='welcome__center-side__text'>Welcome to</span>
                <span className='welcome__center-side__name'><i> - Ichiraku's - </i> </span>
                <span className='welcome__center-side__menu'>Menu</span>
            </div>
            <div className='welcome__left-side'>
                <span>美</span>
                <span>味</span>
                <span>し</span>
                <span>い</span>
            </div>
        </div>
    )
}
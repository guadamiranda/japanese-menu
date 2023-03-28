import React from "react"
import { MdOutlineRamenDining, MdOutlineIcecream } from 'react-icons/md'
import { BiSushi, BiDrink } from 'react-icons/bi'
import './loader.scss'

interface ILoader {

}

export const Loader: React.FC<ILoader> = () => {
    return(
        <div className="loader">
            <BiSushi className="loader__iconAnimation"/>
            <span>Preparing your food</span>
        </div>
    )
}
import React from "react"
import { SideBar } from "../SideBar/SideBar.tsx"

export const SideBarContainer = () => {

    const ramens:Array<Object> = [{name: 'Shoyu ', price: '$1800', ingredients: ['chasu', 'greenOnion', 'eggs', 'sesameSeeds', 'shitakeMush', 'nori', 'soup', 'tare', 'noodles', 'narutomaki'], type: 'ramen'}]
    const sushis:Array<Object> = [{name: 'Nigiri', price: '$500', ingredients: ['sushiRice', 'salmon'], type: 'sushi'}]
    const drinks:Array<Object> = [{name: 'Lemonade', price: '$800', ingredients: ['water', 'lemon', 'ginger', 'mint'], type:'drink'},
                                  {name: 'Coca Cola', price: '$400', ingredients:['coca'], type:'drink'}]
    const dessert:Array<Object> = [{name: 'Ice Cream', price: '$800', ingredients:['iceCream'], type:'dessert'}]


    return(
        <div className='sidebarcontainer'>
            <SideBar ramens={ramens} sushis={sushis} drinks={drinks} desserts={dessert}/>
        </div>
    )
}
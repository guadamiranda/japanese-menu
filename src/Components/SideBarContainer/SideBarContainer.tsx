import React from "react"
import { SideBar } from "../SideBar/SideBar.tsx"

import shoyu1 from '../../Assets/Img/shoyu1.PNG'
import shoyu2 from '../../Assets/Img/shoyu2.jpg'
import shoyu3 from '../../Assets/Img/shoyu3.PNG'

import nigiri1 from '../../Assets/Img/nigiri1.jpg'
import nigiri2 from '../../Assets/Img/nigiri2.jpg'
import nigiri3 from '../../Assets/Img/nigiri3.jpg'

import lemonade1 from '../../Assets/Img/lemonade1.jpg'
import lemonade2 from '../../Assets/Img/lemonade2.jpg'
import lemonade3 from '../../Assets/Img/lemonade3.jpg'

import cocacola1 from '../../Assets/Img/cocacola1.jpg'
import cocacola2 from '../../Assets/Img/cocacola2.jpg'
import cocacola3 from '../../Assets/Img/cocacola3.jpg'

import icecream1 from '../../Assets/Img/icecream1.jpg'
import icecream2 from '../../Assets/Img/icecream2.jpg'
import icecream3 from '../../Assets/Img/icecream3.jpg'

export const SideBarContainer = () => {

    const ramens:Array<Object> = [{name: 'Shoyu ', price: '$1800', isVegan: 'No', isTaccFood: 'No', temperature: 'Hot', ingredients: [{name:'Chasu'}, {name:'Green Onion'}, {name:'Eggs'}, {name:'Sesame Seeds'}, {name:'Shitake Mushroom'}, {name:'Nori'}, {name:'Soup'}, {name:'Tare'}, {name:'Noodles'}, {name:'Narutomaki'}], type: 'ramen', photos:[shoyu1, shoyu2, shoyu3]}]
    const sushis:Array<Object> = [{name: 'Nigiri', price: '$500', isVegan: 'No', isTaccFood: 'Yes', temperature: 'Cold', ingredients: [{name:'Sushi Rice'}, {name:'Salmon'}], type: 'sushi', photos:[nigiri1, nigiri2, nigiri3]}]
    const drinks:Array<Object> = [{name: 'Lemonade', price: '$800', isVegan: 'Yes', isTaccFood: 'Yes', temperature: 'Cold', ingredients: [{name:'water'}, {name:'Lemon'}, {name:'Ginger'}, {name:'Mint'}], type:'drink', photos:[lemonade1, lemonade2, lemonade3]},
                                  {name: 'Coca Cola', price: '$400', isVegan: 'Yes', isTaccFood: 'Yes', temperature: 'Cold', ingredients:[{name:'Secret'}], type:'drink', photos:[cocacola1, cocacola2, cocacola3]}]
    const dessert:Array<Object> = [{name: 'Ice Cream', price: '$800', isVegan: 'No', isTaccFood: 'Yes', temperature: 'Cold', ingredients:[{name:'Ice Cream'}], type:'dessert', photos:[icecream1, icecream2, icecream3]}]


    return(
        <div className='sidebarcontainer'>
            <SideBar ramens={ramens} sushis={sushis} drinks={drinks} desserts={dessert}/>
        </div>
    )
}
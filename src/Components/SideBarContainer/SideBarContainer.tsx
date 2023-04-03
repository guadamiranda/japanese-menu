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

import noodles from '../../Assets/Img/noodles.jpg'
import chashu from '../../Assets/Img/chashu.jpg'
import green from '../../Assets/Img/greenonion.jpg'
import shitake from '../../Assets/Img/shitake.jpg'
import tare from '../../Assets/Img/tare.jpg'
import eggs from '../../Assets/Img/egg.jpg'
import sesame from '../../Assets/Img/sesameseeds.jpg'
import nori from '../../Assets/Img/nori.jpg'
import soup from '../../Assets/Img/soup.jpg'
import narutomaki from '../../Assets/Img/narutomaki.jpg'

import chocolate from '../../Assets/Img/chocolate.jpg'
import vainilla from '../../Assets/Img/vainilla.jpg'
import dulcedeleche from '../../Assets/Img/dulcedeleche.jpg'

import rice from '../../Assets/Img/rice.jpg'
import salmon from '../../Assets/Img/salmon.jpg'

import lemon from '../../Assets/Img/lemons.PNG'
import water from '../../Assets/Img/water.png'
import ginger from '../../Assets/Img/ginger.jpg'
import mint from '../../Assets/Img/mint.jpg'

import secret from '../../Assets/Img/secret.jpg'


export const SideBarContainer = () => {

    const ramens:Array<Object> = [{name: 'Shoyu ', price: '$1800', isVegan: 'No', isTaccFood: 'No', temperature: 'Hot', ingredients: [{name:'Chashu', url: chashu}, {name:'Green Onion', url: green}, {name:'Eggs', url:eggs}, {name:'Sesame Seeds', url: sesame}, {name:'Shitake Mushroom', url: shitake}, {name:'Nori', url: nori}, {name:'Soup', url: soup}, {name:'Tare', url: tare}, {name:'Noodles', url: noodles}, {name:'Narutomaki', url: narutomaki}], type: 'ramen', photos:[shoyu1, shoyu2, shoyu3]}]
    const sushis:Array<Object> = [{name: 'Nigiri', price: '$500', isVegan: 'No', isTaccFood: 'Yes', temperature: 'Cold', ingredients: [{name:'Sushi Rice', url: rice}, {name:'Salmon', url: salmon}], type: 'sushi', photos:[nigiri1, nigiri2, nigiri3]}]
    const drinks:Array<Object> = [{name: 'Lemonade', price: '$800', isVegan: 'Yes', isTaccFood: 'Yes', temperature: 'Cold', ingredients: [{name:'Water', url: water}, {name:'Lemon', url: lemon}, {name:'Ginger', url: ginger}, {name:'Mint', url: mint}], type:'drink', photos:[lemonade1, lemonade2, lemonade3]},
                                  {name: 'Coca Cola', price: '$400', isVegan: 'Yes', isTaccFood: 'Yes', temperature: 'Cold', ingredients:[{name:'Secret', url: secret}], type:'drink', photos:[cocacola1, cocacola2, cocacola3]}]
    const dessert:Array<Object> = [{name: 'Ice Cream', price: '$800', isVegan: 'No', isTaccFood: 'Yes', temperature: 'Cold', ingredients:[{name:'Chocolate', url: chocolate}, {name:'Vainilla', url: vainilla}, {name:'Dulce de Leche', url: dulcedeleche}], type:'dessert', photos:[icecream1, icecream2, icecream3]}]


    return(
        <div className='sidebarcontainer'>
            <SideBar ramens={ramens} sushis={sushis} drinks={drinks} desserts={dessert}/>
        </div>
    )
}
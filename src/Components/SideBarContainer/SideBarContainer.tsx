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

import misoramen1 from '../../Assets/Img/misoRamen.jpg'
import misoramen2 from '../../Assets/Img/misoRamen2.jpg'
import misoramen3 from '../../Assets/Img/misoRamen3.jpg'

import california1 from '../../Assets/Img/california.jpg'
import california2 from '../../Assets/Img/california2.jpg'
import california3 from '../../Assets/Img/california3.jpg'

import shrimp1 from '../../Assets/Img/shrimp1.jpg'
import shrimp2 from '../../Assets/Img/shrimp2.jpg'
import shrimp3 from '../../Assets/Img/shrimp3.jpg'

import rollEgg1 from '../../Assets/Img/tamago1.jpg'
import rollEgg2 from '../../Assets/Img/tamago2.jpg'
import rollEgg3 from '../../Assets/Img/tamago3.jpg'

import gohan1 from '../../Assets/Img/gohan1.jpg'
import gohan2 from '../../Assets/Img/gohan2.jpg'
import gohan3 from '../../Assets/Img/gohan3.jpg'

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

import corn from '../../Assets/Img/corn.jpg'
import bacon from '../../Assets/Img/bacon.jpg'
import butter from '../../Assets/Img/butter.jpg'
import garlic from '../../Assets/Img/Garlic.jpg'
import broth from '../../Assets/Img/broth.jpg'

import chocolate from '../../Assets/Img/chocolate.jpg'
import vainilla from '../../Assets/Img/vainilla.jpg'
import dulcedeleche from '../../Assets/Img/dulcedeleche.jpg'

import rice from '../../Assets/Img/rice.jpg'
import salmon from '../../Assets/Img/salmon.jpg'

import avocado from '../../Assets/Img/avocado.jpg'
import cheese from '../../Assets/Img/cheese.jpg'

import shrimp from '../../Assets/Img/shrimp.jpg'
import eggRoll from '../../Assets/Img/eggRoll.jpg'

import lemon from '../../Assets/Img/lemons.PNG'
import water from '../../Assets/Img/water.png'
import ginger from '../../Assets/Img/ginger.jpg'
import mint from '../../Assets/Img/mint.jpg'

import secret from '../../Assets/Img/secret.jpg'


export const SideBarContainer = () => {
    type Ingredients = {
        name: string,
        url: string
    }

    type MenuInfo = {
        name: string,
        isVegan: string,
        isTaccFood: string,
        temperature: string,
        price: string,
        ingredients: Array<Ingredients>
        type: string,
        photos: Array<string>
    }
    
    const ramens:Array<MenuInfo> = [{name: 'Shoyu', price: '$1800', isVegan: 'No', isTaccFood: 'No', temperature: 'Hot', ingredients: [{name:'Chashu', url: chashu}, {name:'Green Onion', url: green}, {name:'Eggs', url:eggs}, {name:'Sesame Seeds', url: sesame}, {name:'Shitake Mushroom', url: shitake}, {name:'Nori', url: nori}, {name:'Soup', url: soup}, {name:'Tare', url: tare}, {name:'Noodles', url: noodles}, {name:'Narutomaki', url: narutomaki}], type: 'ramen', photos:[shoyu1, shoyu2, shoyu3]},
                                  {name: 'Miso', price: '$1500', isVegan: 'No', isTaccFood: 'No', temperature: 'Hot', ingredients: [{name:'Broth', url: broth}, {name:'Green Onion', url: green}, {name:'Eggs', url:eggs}, {name:'Corn', url: corn}, {name:'Shitake Mushroom', url: shitake}, {name:'Bacon', url: bacon}, {name:'Garlic', url: garlic}, {name:'Butter', url: butter}, {name:'Noodles', url: noodles}, {name:'Nori', url: nori}], type: 'ramen', photos:[misoramen1, misoramen2, misoramen3]}]
    const sushis:Array<MenuInfo> = [{name: 'Nigiri', price: '$500', isVegan: 'No', isTaccFood: 'Yes', temperature: 'Cold', ingredients: [{name:'Sushi Rice', url: rice}, {name:'Salmon', url: salmon}], type: 'sushi', photos:[nigiri1, nigiri2, nigiri3]},
                                  {name: 'California Roll', price: '$600', isVegan: 'No', isTaccFood: 'Yes', temperature: 'Cold', ingredients: [{name:'Sushi Rice', url: rice}, {name:'Salmon', url: salmon}, {name:'Avocado', url: avocado}, {name:'Cream Cheese', url: cheese}], type: 'sushi', photos:[california1, california2, california3]},
                                  {name: 'Shrimp Roll', price: '$600', isVegan: 'No', isTaccFood: 'Yes', temperature: 'Cold', ingredients: [{name:'Sushi Rice', url: rice}, {name:'Shrimp', url: shrimp}, {name:'Avocado', url: avocado}, {name:'Cream Cheese', url: cheese}, {name:'Egg Roll', url: eggRoll}], type: 'sushi', photos:[shrimp1, shrimp2, shrimp3]},
                                  {name: 'Tamago', price: '$400', isVegan: 'No', isTaccFood: 'Yes', temperature: 'Cold', ingredients: [{name:'Sushi Rice', url: rice}, {name:'Nori', url: nori}, {name:'Egg Roll', url: eggRoll} ], type: 'sushi', photos:[rollEgg1, rollEgg2, rollEgg3]},
                                  {name: 'Gohan', price: '$1100', isVegan: 'No', isTaccFood: 'Yes', temperature: 'Cold', ingredients: [{name:'Sushi Rice', url: rice}, {name:'Salmon', url: salmon}, {name:'Shrimp', url: shrimp}, {name:'Cream Cheese', url: cheese}, {name:'Avocado', url: avocado}, {name:'Green Onion', url: green}], type: 'sushi', photos:[gohan1, gohan2, gohan3]}]
    const drinks:Array<MenuInfo> = [{name: 'Lemonade', price: '$800', isVegan: 'Yes', isTaccFood: 'Yes', temperature: 'Cold', ingredients: [{name:'Water', url: water}, {name:'Lemon', url: lemon}, {name:'Ginger', url: ginger}, {name:'Mint', url: mint}], type:'drink', photos:[lemonade1, lemonade2, lemonade3]},
                                  {name: 'Coca Cola', price: '$400', isVegan: 'Yes', isTaccFood: 'Yes', temperature: 'Cold', ingredients:[{name:'Secret', url: secret}], type:'drink', photos:[cocacola1, cocacola2, cocacola3]}]
    const dessert:Array<MenuInfo> = [{name: 'Ice Cream', price: '$800', isVegan: 'No', isTaccFood: 'Yes', temperature: 'Cold', ingredients:[{name:'Chocolate', url: chocolate}, {name:'Vainilla', url: vainilla}, {name:'Dulce de Leche', url: dulcedeleche}], type:'dessert', photos:[icecream1, icecream2, icecream3]}]


    return(
        <div className='sidebarcontainer'>
            <SideBar ramens={ramens} sushis={sushis} drinks={drinks} desserts={dessert}/>
        </div>
    )
}
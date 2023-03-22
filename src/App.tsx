import React from 'react'
import './App.scss';
import { SideBar } from './Components/SideBar/SideBar.tsx';

export const App = () => {
  const ramens:Array<Object> = [{name: 'Shoyu ', price: '$1800', ingredients: ['chasu', 'greenOnion', 'eggs', 'sesameSeeds', 'shitakeMush', 'nori', 'soup', 'tare', 'noodles', 'narutomaki']}]
  const sushis:Array<Object> = [{name: 'Nigiri', price: '$500', ingredients: ['sushiRice', 'salmon']}]
  const drinks:Array<Object> = [{name: 'Lemonade', price: '$800', ingredients: ['water', 'lemon', 'ginger', 'mint']},
                                {name: 'Coca Cola', price: '$400', ingredients:['coca']}]
  const dessert:Array<Object> = [{name: 'Ice Cream', price: '$800', ingredients:['iceCream']}]

  return (
    <div className="App">
      <SideBar ramens={ramens} sushis={sushis} drinks={drinks} desserts={dessert}/>
      <div className='App__body'>
      </div>
    </div>
  );
}


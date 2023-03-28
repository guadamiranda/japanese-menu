import React from 'react'
import { Routes, Route } from 'react-router';
import './App.scss';
import { Welcome } from './Components/Welcome/Welcome.tsx';
import { Menu } from '../src/Views/Menu/Menu.tsx';


export const App = () => {

  const name = 'Ichiraku'
  
  return (
    <div className="App">
      <div className='App__body'>
        <Routes>
          <Route path="/" element={<Welcome name={name}/>} />
          <Route path="/menu" element={<Menu/>} />
        </Routes>
      </div>
    </div>
  );
}


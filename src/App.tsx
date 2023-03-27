import React from 'react'
import { Routes, Route } from 'react-router';
import './App.scss';
import { Welcome } from './Components/Welcome/Welcome.tsx';
import { Menu } from './Components/Menu/Menu.tsx';


export const App = () => {
  
  return (
    <div className="App">
      <div className='App__body'>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/menu" element={<Menu/>} />
        </Routes>
      </div>
    </div>
  );
}


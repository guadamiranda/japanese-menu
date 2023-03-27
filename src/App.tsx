import React from 'react'
import './App.scss';
import { Welcome } from './Components/Welcome/Welcome.tsx';


export const App = () => {

  const name = 'Ichiraku'
  
  return (
    <div className="App">
      <div className='App__body'>
        <Welcome name={name}/>
      </div>
    </div>
  );
}


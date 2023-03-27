import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter
} from "react-router-dom";
import './index.css';

import { App } from './App.tsx';
import { SideBarContainer } from './Components/SideBarContainer/SideBarContainer.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SideBarContainer/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);


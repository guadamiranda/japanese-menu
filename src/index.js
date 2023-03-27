import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import { App } from './App.tsx';
import { SideBarContainer } from './Components/SideBarContainer/SideBarContainer.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideBarContainer/>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </React.StrictMode>
);


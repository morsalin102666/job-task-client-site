import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import SupperHero from './components/SupperHero/SupperHero.jsx';
import Interview from './components/Interview/Interview.jsx';
import SingUp from './components/SingUp/SingUp.jsx';
import Login from './components/Login/Login.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/supperHerro',
        element: <SupperHero></SupperHero>
      },
      {
        path: '/interview',
        element: <Interview></Interview>
      },
      {
        path: '/signUp',
        element: <SingUp></SingUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

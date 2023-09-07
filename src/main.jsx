import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import PandaAds from './pages/PandaAds/PandaAds'



const router = createBrowserRouter([
  {
    path: '/about',
    element: <About />
  }, 
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pandaads',
    element: <PandaAds />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)

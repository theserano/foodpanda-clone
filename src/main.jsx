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
import {Suspense, lazy} from 'react';
import Loading from './components/loading/Loading.jsx';
// import About from './pages/About/About'
// import Contact from './pages/Contact/Contact'
// import Home from './pages/Home/Home'
// import PandaAds from './pages/PandaAds/PandaAds'


const delayForDemo = (promise) => {
  return new Promise (resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const AboutPage = lazy(() => delayForDemo(import('./pages/About/About')))
const ContactPage = lazy(() => delayForDemo(import('./pages/Contact/Contact')))
const HomePage = lazy(() => delayForDemo(import('./pages/Home/Home')))
const PandaAdsPage = lazy(() => delayForDemo(import('./pages/PandaAds/PandaAds')))



const router = createBrowserRouter([
  {
    path: '/about',
    element: <Suspense fallback={<Loading />}>
      <AboutPage />
    </Suspense>
  }, 
  {
    path: '/contact',
    element: <Suspense fallback={<Loading />}>
      <ContactPage />
    </Suspense>
  },
  {
    path: '/',
    element: <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  },
  {
    path: '/pandaads',
    element: <Suspense fallback={<Loading />}>
      <PandaAdsPage />
    </Suspense>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)

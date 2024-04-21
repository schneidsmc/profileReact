// import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Banner from './shared/Banner.jsx'
// import Footer from './shared/Footer.jsx'
// import Projects from './shared/Projects.jsx'

import App from './App'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Home from './pages/Home'
import Projects from './shared/Projects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Projects',
        element: <Projects />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

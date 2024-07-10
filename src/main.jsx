// import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App'
import About from './pages/About'
import Blog from './pages/Blog'
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
        path: '/Blog',
        element: <Blog />,
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

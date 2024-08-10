import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/About'
import Team from './pages/Team'
import Servies from './pages/Services'
import Blog from './pages/Blogs'
import Gallery from './pages/Gallery'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import SingleBlog from './pages/SingleBlog'

function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:'about-us',
      element:<About/>
    },
    {
      path:'team',
      element:<Team/>
    },
    {
      path:'services',
      element:<Servies/>
    },
    {
      path:'blogs',
      element:<Blog/>
    },
    {
      path:'gallery',
      element:<Gallery/>
    },
    {
      path:'careers',
      element:<Careers/>
    },
    {
      path:'contact',
      element:<Contact/>
    },
    {
      path:"/singleBlog/:id",
      element:<SingleBlog/>
    }
  ])

  return (
     <RouterProvider router={router}/>
  )
}

export default App;
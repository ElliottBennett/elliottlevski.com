import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/home"
import Art from './pages/art';
import Performance from './pages/performance';
import Video from './pages/video';
import Nav from './components/navigation'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/art",
    element: <Art/>
  },
  {
    path: "/performance",
    element: <Performance/>
  },
  {
    path: "/video",
    element: <Video/>
  },
])


function App({}) {
 
  return (
    <>
    {/* <Nav/> */}
    <RouterProvider  router={router} />


    </>
  )
}

export default App

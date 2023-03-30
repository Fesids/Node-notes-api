import { useContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { Notes } from './pages/Notes'
import { CreateNote } from './pages/CreateNote'
import { SingleNote } from './pages/SingleNote'
import axios from 'axios'
import { UpdateNote } from './pages/UpdateNote'

axios.defaults.baseURL = "http://localhost:8000/"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },{
        path: "/notes",
        element: <Notes/>
      },{
        path: "/add/notes",
        element: <CreateNote/>
      },
      {
        path: "/notes/:id",
        element: <SingleNote/>
      },
      {
        path: "/update/:id",
        element: <UpdateNote/>
      }
    ]
    
  }
])

function App() {
  
  
  return(
   <RouterProvider router={router}/>
  )

  
}

export default App

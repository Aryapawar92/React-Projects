import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {store} from './App/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import {Provider} from 'react-redux'
import SignUp from './components/SignUp/SignUp.jsx'
import SignOut from './components/SignIn/SignOut.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>

      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "signin",
        element: <SignIn/>
      },
      {
        path : "signup",
        element: <SignUp/>
      },
      {
        path: "signout",
        element: <SignOut/>
      }

      

      
    ]
    


  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)

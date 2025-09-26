
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import View_profile from './View_profile.jsx'
import EditProfile from './EditProfile.jsx'
import SkillsReels from './SkillsReels.jsx'
import Education from './Education.jsx'
import Clubs from './Clubs.jsx'




const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/profile',
      element:<View_profile/>
    },
    {
      path:'/edit_profile',
      element:<EditProfile/>

    },
    { 
      path: "/skills",
      element: <SkillsReels /> 
    },{
      path:"/education",
      element:<Education/>
    },
    {
      path:"/clubs",
      element:<Clubs/>
    }

  ]
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
 
)

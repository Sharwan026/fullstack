// import Signup from "./pages/Signup"
// import './assets/css/login.css'
// import React from "react"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home2 from "./pages/home2"
import Adminhome from "./pages/admin/adminhome"
import UserProfile from "./pages/admin/userprofile"
import FAQForm from "./pages/admin/faq"
import LoanApplicationForm from "./pages/loanform"
import Admin from "./pages/admin/Admin"
import KccForm from "./pages/kccform"
import UserCreationForm from "./pages/admin/createuser"
import PersonalProfile from "./pages/admin/profile"
const App=()=>{
  const router = createBrowserRouter([
    {
      path: '/home',
      element:<Home/>
    },
    {
      path: '/about',
      element:<About/>
    },
    {
      path: '/contact',
      element:<Contact/>
    },
    {
      path:'/Login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path: '/loan',
      element:<Home2/>
    },
    {
      path:'/adminhome',
      element:<Adminhome/>
    },
    {
      path:'/userprofile',
      element:<UserProfile/>
    },
    {
      path:'/faq',
      element:<FAQForm/>
    },
    {
      path:'/loanform',
      element:<LoanApplicationForm/>
    },
    {
      path:'/admin',
      element:<Admin/>
    },
    {
      path:'/kccform',
      element:<KccForm/>
    },
    {
      path:"/createuser",
      element:<UserCreationForm/>
    },
    {
      path:"/profile",
      element:<PersonalProfile/>
    }
  ])
    return (
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App;
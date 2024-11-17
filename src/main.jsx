import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayOut/MainLayout.jsx';
import Home from './Components/HomeLAyout/Home.jsx';
import AllTreatment from './Components/HomeLAyout/AllTreatment.jsx';
import MyApoinMEnt from './Components/HomeLAyout/MyApoinMEnt.jsx';
import Details from './Components/Details/Details.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Login from './Components/Rejister/Login.jsx';
import Register from './Components/Rejister/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "*",
        element: <h2>no page fount</h2>
      },
      {
        path: "/",
        element: <Home></Home>,
        loader:async ()=>{
          const service =await fetch('/Service.json')
          const serviceData=await service.json()
          const feedBack =await fetch('/Feedback.json')
          const feedbackData=await feedBack.json()
          return {serviceData,feedbackData}

        }
      },
      {
        path: "alltratment",
        element:<AllTreatment></AllTreatment>,
        loader:()=>fetch('/Service.json')
      },
      {
        path: "login",
        element:<Login></Login>

      },
      {
        path: "register",
        element:<Register></Register>

      },
      {
        path: "myapointment",
        element:<MyApoinMEnt></MyApoinMEnt>

      },
      {
        path: "/details/:id",
        element:<Details></Details>,
        loader:({params})=>fetch("/Service.json")

      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)

import { createBrowserRouter } from "react-router-dom";

import Register from "../UserCreateLoginMethods/Register";
import Login from "../UserCreateLoginMethods/Login";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import Dashboard from "../Components/DashBoard/Dashboard";
import AddProducts from "../Components/DashBoard/AddProducts";
import Profile from "../Components/DashBoard/Profile";
import FlatsDetails from "../Components/FlatDetails/FlatDetails";
import HomePage from "../Pages/HomePage";

import ManageProperties from "../Components/DashBoard/ManageProperties";
import EditProperties from "../Components/DashBoard/EditProperties";
import Categories from "../Components/Home/Categories";
import EditProfile from "../Components/DashBoard/EditProfile";
import FlatCollection from "../Components/Flats/FlatCollection";
import InteriorDesign from "../Components/Interior/InteriorDesign";
import InteriorList from "../Components/Interior/InteriorList";









export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
        
      children:[
                {
                    path:'/',
                    element:<HomePage></HomePage>
                },
       
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                }, 
                {
                  path:'/category',
                  element:<Categories></Categories>
              }, 
              {
                path:'/interior',
                element:<InteriorDesign></InteriorDesign>
            }, 
              {
                path:'/collection',
                element:<FlatCollection></FlatCollection>
              },   {
                path:'/interiorlist',
                element:<InteriorList></InteriorList>
              }, 


                {
                    path: "/flats/:id",
                    element: <FlatsDetails />,
                    loader: ({ params }) =>
                      fetch(
                        `https://land-mark-lh54.vercel.app/flatlist/${params.id}`
                      ),
                },
             
               
               
]},

{
    path:"/dashboard",
    element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
            {
               path:"/dashboard/addproducts",
               element:<PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
            },
            {
                path:"/dashboard/profile",
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
             },
             {
              path:"/dashboard/profile/edit/:id",
              element:<PrivateRoutes><EditProfile></EditProfile></PrivateRoutes>,   
              loader: ({ params }) =>
                fetch(
                  `https://land-mark-lh54.vercel.app/userlist/get/${params.id}`
                ),
             },
             {
                path:"/dashboard/management",
                element:<PrivateRoutes><ManageProperties></ManageProperties></PrivateRoutes>
             },
             {
                path:"/dashboard/editproperties/:id",
                element:<PrivateRoutes><EditProperties></EditProperties></PrivateRoutes>,
                loader: ({ params }) =>
                    fetch(
                      `https://land-mark-lh54.vercel.app/flatlist/${params.id}`
                    ),
             },


            ]},  
      

])
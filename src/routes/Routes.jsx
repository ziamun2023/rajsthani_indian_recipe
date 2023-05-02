import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../component/home/Home";



import About from "../component/About/About";
import Blog from "../component/blog/Blog";
import Newlayout from "../chefDetailsLayout/Newlayout";
import ReceipeDetails from "../chefDetailsLayout/ReceipeDetails";



const router = createBrowserRouter([
  {path:'/',
element:<Main></Main>,
children:[
  {path:'/home',
element:<Home></Home>
},
{path:'/',
element:<Home></Home>
},
{path:'/about',
element:<About></About>},
{path:'/blog',
element:<Blog></Blog>}
]}
,
{
  path:'/',
  element:<Newlayout></Newlayout>,
  children:[
      {path:'/Chefreceipe',
  element:<ReceipeDetails></ReceipeDetails>}
  ]

}
])

  export default router
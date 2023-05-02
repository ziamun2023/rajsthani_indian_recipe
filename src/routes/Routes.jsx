import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../component/home/Home";


import ChefProfile from "../chefDetailsLayout/ChefProfile";
import About from "../component/About/About";
import Blog from "../component/blog/Blog";

const router = createBrowserRouter([
  {path:'/',
element:<Main></Main>,
children:[
  {path:'/',
element:<Home></Home>,
},
{path:'/:id',
element:<ChefProfile></ChefProfile>},
{path:'/about',
element:<About></About>},
{path:'/blog',
element:<Blog></Blog>}
]}
])

  export default router
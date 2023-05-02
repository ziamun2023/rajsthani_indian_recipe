import { createBrowserRouter, useLoaderData } from "react-router-dom";
import Main from "../main/Main";
import Home from "../component/home/Home";



import About from "../component/About/About";
import Blog from "../component/blog/Blog";
// import Newlayout from "../chefDetailsLayout/Newlayout";
import ReceipeDetails from "../chefDetailsLayout/ReceipeDetails";
import Newlayout from "../chefDetailsLayout/Newlayout";



const router = createBrowserRouter([
  {path:'/',
element:<Main></Main>,
children:[
  {path:'/',
element:<Home></Home>
},
{path:'/home',
element:<Home></Home>
},
{path:'/about',
element:<About></About>},
{path:'/blog',
element:<Blog></Blog>},
{path:'/ReceipeDetails/:id',
element:<ReceipeDetails></ReceipeDetails>,
loader:({params})=>fetch(`https://chef-data-server.vercel.app/ReceipeDetails/${params.id}`)}

]}
// ,
//  {
//    path:'/receipe',
//   element:<Newlayout></Newlayout>,
// children:[
//   {path:'id',
// element:<ReceipeDetails></ReceipeDetails>}
 
//   ]

//  }
])



  export default router
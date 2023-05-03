import { createBrowserRouter, useLoaderData } from "react-router-dom";
import Main from "../main/Main";
import Home from "../component/home/Home";



import About from "../component/About/About";
import Blog from "../component/blog/Blog";
// import Newlayout from "../chefDetailsLayout/Newlayout";
import ReceipeDetails from "../chefDetailsLayout/ReceipeDetails";
// import Newlayout from "../chefDetailsLayout/Newlayout";
import DetailsRECIPE from "../chefDetailsLayout/DetailsRECIPE";
import Login from "../component/login/Login";
// import Register from "../component/register/Register";
import Signup from "../component/register/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";



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
{path:'/login',
element:<Login></Login>},
{path:'/register',
element:<Signup></Signup>},

{path:'/details',
element:<DetailsRECIPE></DetailsRECIPE>},
{path:'/ReceipeDetails/:id',
element:<PrivateRoute><ReceipeDetails></ReceipeDetails></PrivateRoute>,
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
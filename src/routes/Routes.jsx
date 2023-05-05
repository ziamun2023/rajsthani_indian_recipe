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
import LoadingSpinner from "../Spinner/LoadingSpinner";
// import ErrorPage from "../component/errorpage/ErrorPage ";
import ErrorHandle from "../component/errorpage/ErrorHandle";



const router = createBrowserRouter([
  {path:'/',
element:<Main></Main>,
errorElement:<ErrorHandle/>, 
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
{
  path:'/*',
  element:<ErrorHandle/>

},
{path:'/register',
element:<Signup></Signup>},
// {
//   path:'/*',
//   element:<ErrorPage/>
// },
{
  path:'/loader',
  element:<LoadingSpinner/>
},

{path:'/details',
element:<DetailsRECIPE></DetailsRECIPE>},
{path:'/ReceipeDetails/:id',
element:<PrivateRoute><ReceipeDetails></ReceipeDetails></PrivateRoute>,
loader:({params})=>fetch(`https://chef-data-server.vercel.app/ReceipeDetails/${params.id}`)}

]}

])



  export default router
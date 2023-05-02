import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../component/home/Home";
import DetailsLayout from "../chefDetailsLayout/DetailsLayout";
import FoodItem from "../chefDetailsLayout/FoodItem";
import ChefProfile from "../chefDetailsLayout/ChefProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main>Hello world!</Main>,
      children:[
        {path:'/',
    element:<Home></Home>},
    
      ]
    },
    {
      path:'/:id',
      element:<DetailsLayout></DetailsLayout>,
      children:[
      //   {path:':id',
      // element:<FoodItem></FoodItem>},
      {path:':id',
      element:<ChefProfile></ChefProfile>},
      
      ]
    }
  ]);

  export default router
// import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsRECIPE from './DetailsRECIPE';
import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';
// import { p } from 'vite/dist/node/chunks/dep-a178814b';
// import Categorieschef from '../component/home/Categorieschef';
// import { Link } from 'react-router-dom';
// import Cards from '../component/home/Cards';

const ReceipeDetails = () => {
    // const [result,setResult]=useState([])
    // console.log(result)
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://chef-data-server.vercel.app/ReceipeDetails')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    //     .catch(error=>console.log(error))
    // },[])

   
    // console.log(data)
//  let arrayofchef=[]

 const {id}=useParams()
 const categorydish=useLoaderData()

const names=categorydish.filter(item=>item.chef_name)
console.log(names)
const dishesTopreview=categorydish.filter(item=>!item.chef_name)
console.log(dishesTopreview)

    return (
        <div className='mx-14 mt-5'>
          
            <h1 className='text-3xl'><img src={names[0].pictures_url} alt="" /></h1>

<div className='container grid lg:grid-cols-3 gap-8'>

         
         {
          dishesTopreview.map(item=><DetailsRECIPE key={item._id} item={item}  ></DetailsRECIPE>)
         }
           
          </div>

   <p>
   {/* {foundperson.chef_name} */}
   </p>
        </div>
    );
};

export default ReceipeDetails;

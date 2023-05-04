// import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import DetailsRECIPE from './DetailsRECIPE';
import LoadingSpinner from '../Spinner/LoadingSpinner';
import LazyLoad from 'react-lazy-load';
// import { useEffect, useState } from 'react';
// import LoadingSpinner from '../Spinner/LoadingSpinner';
// import { useEffect, useState } from 'react';
// import { p } from 'vite/dist/node/chunks/dep-a178814b';
// import Categorieschef from '../component/home/Categorieschef';
// import { Link } from 'react-router-dom';
// import Cards from '../component/home/Cards';

const ReceipeDetails = () => {
    const navigation=useNavigation()
    if(navigation.state==='loading'){
       return <LoadingSpinner/>
    }
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
               <LazyLoad height={562}>
               <div className='grid lg:grid-cols-3 my-32 bg-amber-600 rounded-md'>   
       <div className='rounded-md' >
       <img className='p-5 rounded-md' src={names[0].pictures_url} alt="" />
  
       </div>
       <div className='my-auto ms-2'>
        <p className='text-black text-3xl font-semibold mb-2'>Chef Name:{names[0].chef_name}</p>
        <p  className='text-black text-3xl font-semibold mb-2'> Years of Experience :{names[0].years_of_experience}</p>
        <p  className='text-black text-3xl font-semibold mb-2'>Number of recipe:{names[0].num_recipes}</p>
        

       </div>
       <div className='my-auto'>
        <p className='text-4xl text-black font-bold'>About Chef</p>
       <p  className='text-black text-3xl font-semibold p-2 '>{names[0].about}</p>
       </div>
       </div>
     </LazyLoad>  


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

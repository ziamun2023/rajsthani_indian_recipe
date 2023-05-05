// import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import DetailsRECIPE from './DetailsRECIPE';
import LoadingSpinner from '../Spinner/LoadingSpinner';
import LazyLoad from 'react-lazy-load';

const ReceipeDetails = () => {
    const navigation=useNavigation()
    if(navigation.state==='loading'){
       return <LoadingSpinner/>
    }


 const {id}=useParams()
 const categorydish=useLoaderData()


const names=categorydish.filter(item=>item.chef_name)
console.log(names)
const dishesTopreview=categorydish.filter(item=>!item.chef_name)
console.log(dishesTopreview)

    return (
        <div className=' mt-5'>
               <LazyLoad >
               <div className='grid lg:grid-cols-6 my-28 glass drop-shadow-2xl rounded-md w-5/6 mx-auto  py-10'>   
       <div className='rounded-md col-span-2' >
       <img className='p-5 my-auto rounded-md chef-photo' src={names[0].pictures_url} alt="" />
  
       </div>
   
        
<div className='col-span-4 bg-gray-300 mx-5 px-10 py-5 rounded-md'>
<p className='text-black text-2xl font-semibold mb-2'><b>Chef Name:</b>{names[0].chef_name}</p>
        <p  className='text-black text-2xl font-semibold mb-2'> <b>Years of Experience :</b>{names[0].years_of_experience}</p>
        <p  className='text-black text-2xl font-semibold mb-2'><b>Number of recipe:</b>{names[0].num_recipes}</p>
        <div className='my-auto'>
        <p className='text-2xl text-black font-bold text-center'>About Chef</p>
       <p  className='text-black font-semibold p-2 '>{names[0].about}</p>
       </div>
</div>

    
     
       </div>
     </LazyLoad>  



<h1 className='text-5xl text-gray-600 text-center mb-10'>All items</h1>
<div className='container mb-14'>

         
      <div className=' grid lg:grid-cols-3 md:grid-cols-2  gap-7  '>
      {
          dishesTopreview.map(item=><DetailsRECIPE key={item._id} item={item}  ></DetailsRECIPE>)
         }
           
      </div>
          </div>

</div>
        
    );
};

export default ReceipeDetails;

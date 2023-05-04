import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { p } from 'vite/dist/node/chunks/dep-a178814b';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FcLike } from "react-icons/fc";

const DetailsRECIPE = ({item}) => {
    // const handleLike=()=>{
    //     toast("you liked this cart!");
    // }
    
//   const [result22,setResult]=useState([])


    // console.log(individualID)
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(' https://chef-data-server.vercel.app/ReceipeDetails')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=>console.log(error))
    },[])

     
 
//   const findid=number

//   console.log(findid.length)
    const {category_id,name,details,picture_url,ingredients}=item
    // console.log(category_id)

// let array=[]
    // const result=data.find(chef=>chef.id===findid)
 
//  array.push=result
//  console.log(array)
    return (
        <div className='grid lg:grid-cols-2 gap-7'>
               <div className="card w-96 glass">
  <figure><img src={picture_url}alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='font-semibold text-gray-600'>About the recipe</p> <span><p> {details}</p></span>
    <small><p className='font-semibold text-gray-600'>Ingredients</p>{ingredients}</small>
    {/* <div >  <FcLike  onClick={handleLike}/>      <ToastContainer /></div> */}
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
<div >

{/* <img src={result.picture_url} alt="" /> */}
   {/* <img src={result.picture_url?.picture_url} alt="" /> */}

</div>
        </div>
    );
};

export default DetailsRECIPE;
import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { p } from 'vite/dist/node/chunks/dep-a178814b';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcLike } from "react-icons/fc";
import { BsFillHeartFill } from "react-icons/bs";


const DetailsRECIPE = ({item}) => {

  const [love,setLove]=useState(1)

    const handleLike=(name)=>{
      setLove(love === 1 ? 2 : 1);
 toast(name)
if(love===1){
  toast("Disliked")
}
else if(love===2){
  toast("liked ")
}
    }
    
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://chef-data-server.vercel.app/ReceipeDetails')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=>console.log(error))
    },[])

     

    const {name,details,picture_url,ingredients}=item


    return (
        <div >
             <ToastContainer />
            <div className=' '>
            <div className="card glass">
  <figure><img className='h-52 my-10 ' src={picture_url}alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title font-semibold text-2xl text-gray-900">{name}</h2>
    <p className='font-semibold text-gray-800'>About the recipe</p> <span><p className='text-gray-600 mb-5'> {details}</p></span>
   <div className='bg-gray-600 p-5 rounded-md'> <small><p className='font-semibold text-gray-200'>Ingredients</p>{ingredients}</small></div>
    <div > <b>Hit like button if you love </b> <div><button  onClick={()=>handleLike(name)}> {love===1?<FcLike/>:<BsFillHeartFill/>} </button></div> </div>

    
  </div>
</div>
            </div>
        </div>
    );
};

export default DetailsRECIPE;
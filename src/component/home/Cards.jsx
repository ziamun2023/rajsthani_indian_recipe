// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Cards = () => {
//     const [data,setData]=useState([])
//     useEffect(()=>{
//         fetch('https://chef-data-server.vercel.app/ReceipeDetails')
//         .then(res=>res.json())
//         .then(data=>setData(data))
//         .catch(error=>console.log(error))
//     },[])
//     return (
   
// };

// export default Cards;
import React from 'react';
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = ({item}) => {
const handleLike=()=>{
    toast("you liked this cart!");
}


    const {chef_name,picture_url,id,years_of_experience,num_recipes}=item
    return (
        <div className='my-5 h-full' >
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='h-96' src={picture_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{chef_name}</h2>
    <p>years of experience{years_of_experience}</p>
    <p>Number of recipe {num_recipes}</p>

    <div className="card-actions justify-end flex">

<div >  <FcLike  onClick={handleLike}/>      <ToastContainer /></div>
     <div> <Link to={`/Receipedetails/${id}`}> Recipe Details</Link></div>
    </div>
  </div>
</div>
    </div> 
    );
};

export default Cards;
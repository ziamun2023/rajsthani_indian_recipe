
import React from 'react';
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { FcRating } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LazyLoad from 'react-lazy-load';

const Cards = ({item}) => {

const handleLike=()=>{
    toast("Favourite chef added");
}


    const {chef_name,picture_url,id,years_of_experience,num_recipes,ratings,likes}=item
    return (
        <div className='my-5 h-full mx-auto ' >
            <ToastContainer />
        <div className="card card-compact w-full bg-base-100 drop-shadow-2xl ">
  <figure>
  <LazyLoad height={400}>
  <img className='h-96  w-80 chef-photo'  src={picture_url} alt="Shoes" />
    </LazyLoad></figure>
  <div className="card-body  ">
    <h2 className="card-title">{chef_name}</h2>
  <div><span className='font-semibold text-gray-200'>years of experience:</span><span className='mx-2'>{years_of_experience}</span></div>
    <p><span className='font-semibold text-gray-200'>Number of recipe :</span><span className='mx-2'>{num_recipes}</span></p>
    <div><span className='font-semibold text-gray-200'>Likes:</span><span className='mx-2'>{likes} k</span></div>
<div className='flex'>  <div><span className='font-semibold text-gray-200 me-2'>ratings:</span></div><div className=''>{ratings}</div><div className='my-auto ms-2'><FcRating/></div></div>


    <div className="card-actions justify-end flex">

<div >  <FcLike  onClick={handleLike}/>    </div>
     <div> <Link to={`/Receipedetails/${id}`}> Recipe Details</Link></div>
    </div>
  </div>
</div>
    </div> 
    );
};

export default Cards;
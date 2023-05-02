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
import { Link } from 'react-router-dom';

const Cards = ({item}) => {
    const {picture_url,id}=item
    return (
        <div >
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={picture_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
      <Link to={`/Receipedetails/${id}`}> details</Link>
    </div>
  </div>
</div>
    </div> 
    );
};

export default Cards;
import React, { useEffect, useState } from 'react';
// import Cards from './Cards';
import { Link } from 'react-router-dom';
import Cards from './Cards';
// import { p } from 'vite/dist/node/chunks/dep-a178814b';

const Categorieschef = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://chef-data-server.vercel.app/ReceipeDetails')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div >

            
{/* {`/Receipedetails/${item.id}`} */}

        <div className="grid lg:grid-cols-3">
        {
    data.map(item=><Cards key={item.id} item={item} ></Cards>)
}
     
      </div></div>
       );
        
    
};

export default Categorieschef;
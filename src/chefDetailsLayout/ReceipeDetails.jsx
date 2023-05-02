import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Categorieschef from '../component/home/Categorieschef';


const ReceipeDetails = () => {
    

 const {id}=useParams()
 const categorydish=useLoaderData()
    return (
        <div>
          <p>  {
                categorydish.length
            }</p>
           
        </div>
    );
};

export default ReceipeDetails;

import React from 'react';



const ChefCards = ({chef}) => {

    const {chef_name,picture_url,about}=chef

    return (
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={picture_url} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
        <p>{about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View receipe</button>
        </div>
      </div>
    </div>
    );
};

export default ChefCards;
import React, { useEffect, useState } from 'react';
// import ScrollToTop from "react-scroll-to-top";
// import ChefCards from '../ChefCards/ChefCards';
// import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Categorieschef from './Categorieschef';
import RecentNewsAndSHows from '../recentNews/RecentNewsAndSHows';
import PeoplesReview from '../FeedBackFood/PeoplesReview';
// import About from '../About/About';
import ReactTopdf from '../../reactToPdf/ReactTopdf';
import AnimateGotop from '../animation/AnimateGotop';
import { FaSistrix } from "react-icons/fa";




const Home = () => {
    return (
        <div className='mt-5 w-full h-full '>

          <div className='relative '>
            <div className=' '>
              
          <img className='w-full h-96  brightness-50 object-cover rounded-xl' src="../../../public/pexels-ella-olsson-1640773 (2).jpg" alt="" />
            </div>
         
<div className='absolute  top-28 left-6'>
<h1 className='tracking-wide text-white text-3xl  text-start font-semibold text-center'> Unleash the Flavors of India <br /> Discover the Best Recipes with Just One Click </h1>
<div className='flex'><input type="text" placeholder="Type here" className="input w-full mt-5 bg-white max-w-xs" /><button className="btn btn-active btn-ghost mt-5 ms-5"> <FaSistrix/></button></div>

</div>

          </div>
        
<div>


<h1 className='text-gray-800 text-5xl text-center font-semibold my-12'>Our best Chefs</h1>

    <Categorieschef></Categorieschef>
      <div className="carousel w-5/6 mx-auto my-20">
  <div id="item1" className="carousel-item w-full grid lg:grid-cols-2">
    <img src="/cover5 .jpg" className="w-full banners-photo" />
    <p className='text-gray-800 tracking-wide text-full px-5 font-semibold my-auto '>Experience Authentic Indian Cuisine: Let Our Expert Chef Take You on a Culinary Journey</p>

  </div> 
  <div id="item2" className="carousel-item w-full grid lg:grid-cols-2">
    <img  src="/cover4.jpg" className="w-full banners-photo" />
    <p className='text-gray-800 tracking-wide text-full px-5 font-semibold my-auto '>Savor the Flavors of Rajasthan: Your Ultimate Food Destination!</p>

  </div> 
  <div id="item3" className="carousel-item w-full grid lg:grid-cols-2">
    <img src="/cover6.jpg" className="w-full banners-photo" />
    <p className='text-gray-800 tracking-wide text-full px-5 font-semibold my-auto '>Experience the Richness of Rajasthani Cuisine: Indulge in Authentic Delights!</p>

  </div> 
  
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>



     
  
 
        

        
  <div className='containers'>
  <h2 className='text-center text-5xl text-black mb-11'>Bringing Families Together</h2>
  <h1 className='text-center  banner-text '><p className='text-start'> Experience the Joy of Sharing <br /> Delicious Indian Food!</p></h1>
  <img className='bg-img' id='bg-img2'  alt=""  />
  
</div>

<RecentNewsAndSHows></RecentNewsAndSHows>

<PeoplesReview></PeoplesReview>


<ReactTopdf/>

<AnimateGotop/>
</div>

        </div>
    );
};

export default Home;
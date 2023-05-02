import React, { useEffect, useState } from 'react';
import ChefCards from '../ChefCards/ChefCards';
import { Carousel, Col, Row } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Home = () => {

    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://chef-data-server.vercel.app/chef')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div className='mt-5 CarouselContainer'>
            <Carousel >
      <Carousel.Item  >
       <Row>  
      <Col lg={6}>
        <img className='photos' src='../../../public/cover6.jpg' alt="" /></Col >
     <Col lg={6} >   <h1 className='text-black carouselText mt-5 text-start'>Authentic Indian Flavors Straight from the Kitchen of a Master Chef!   </h1> <button className='btn btn-secondary'>Learn More</button></Col>
     </Row>
      </Carousel.Item>
      <Carousel.Item  >
       <Row>  
      <Col lg={6}>
        <img className='photos' src='../../../public/cover5 .jpg' alt="" /></Col >
     <Col lg={6} >   <h1 className='text-black carouselText mt-5 text-start'>Discover the Flavors of India with Our Master Chef</h1> <button className='btn btn-secondary'>Learn More</button></Col>
       </Row>
      </Carousel.Item>
      <Carousel.Item  >
       <Row>  
      <Col lg={6}>
        <img className='photos' src='../../../public/cover4.jpg' alt="" /></Col >
     <Col lg={6} >   <h1 className='text-black carouselText mt-5 text-start'>Unleash the Magic of Indian Cooking: Join Our Chef and Learn to Cook Like a Pro!</h1> <button className='btn btn-secondary'>Learn More</button></Col>
       </Row>
      </Carousel.Item>
      {/* <Carousel.Item >
       <div  className='row'>  
      <div  className='col'> <img
          className="d-block w-100"
          src='../../../public/cover1.jpg'
          alt="First slide"
        /></div>
     <div  className='col'>   </div >
       </div>
      </Carousel.Item>
      <Carousel.Item >
       <div  className='row'>  
      <div  className='col'>  <img
          className="d-block w-100"
          src='../../../public/cover1.jpg'
          alt="First slide"
        /></div>
     <div  className='col'>   <h1 className='text-black carouselText mt-5 text-start'>Unleash the Magic of Indian Cooking: Join Our Chef and Learn to Cook Like a Pro!</h1></div>
       </div>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src='../../../public/cover1.jpg'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
      
   

  
    {
                data.map((chef)=><ChefCards key={chef.id} chef={chef}></ChefCards>)
            }

        

        
  <div className='containers mt-5'>
  <h2 className='text-center'>Bringing Families Together</h2>
  <h1 className='text-center  banner-text '><p className='text-start'> Experience the Joy of Sharing <br /> Delicious Indian Food!</p></h1>
  <img className='bg-img' id='bg-img2'  alt=""  />
  
</div>

 

{/* <Marquee>
   <p>helow</p>
   <p>helow</p>
   <p>helow</p>
  
    

   
  </Marquee> */}

{/* <div className="banner-container">
  <img src="../../../public/cover9.jpg" alt="Banner Image" className="banner-image"/>
  <div className="banner-text">
    <h1>Example Text</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris euismod, lectus vel rutrum dignissim, velit velit congue nulla, sit amet fringilla tellus dolor in ipsum.</p>
  </div>
</div> */}

        </div>
    );
};

export default Home;
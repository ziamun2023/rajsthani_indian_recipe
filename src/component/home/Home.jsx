import React, { useEffect, useState } from 'react';
// import ChefCards from '../ChefCards/ChefCards';
// import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Categorieschef from './Categorieschef';
import RecentNewsAndSHows from '../recentNews/RecentNewsAndSHows';
import PeoplesReview from '../FeedBackFood/PeoplesReview';
// import About from '../About/About';
import ReactTopdf from '../../reactToPdf/ReactTopdf';
// import PeoplesReview from '../FeedBackFood/PeoplesReview';

// import Marquee from "react-fast-marquee";

const Home = () => {

  
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

   
    return (
        <div className='mt-5 CarouselContainer'>

<div>
<ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1 }
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 1000, height: 600 }}>
       <div className='mt-20 grid md:grid-cols-2'>


      <div> <img  className='carts' src="../../../public/cover5 .jpg" alt="" /></div>
     <p className='text-black text-2xl font-semibold'>Experience Authentic Indian Cuisine: Let Our Expert Chef Take You on a Culinary Journey</p>
       </div>
        </div>
        <div style={{ width: 1000, height: 600 }}>
       <div className='mt-20 grid md:grid-cols-2'>


      <div> <img  src="../../../public/cover6.jpg" alt="" /></div>
      <div> <p className='text-black text-5xl font-semibold mt-5'>Experience Authentic Indian Cuisine: Let Our Expert Chef Take You on a Culinary Journey</p></div>
       </div>
        </div>
        <div style={{ width: 1000, height: 600 }}>
       <div className='mt-20 grid md:grid-cols-2'>


      <div> <img  src="../../../public/cover4.jpg" alt="" /></div>
      <div> <p className='text-black text-5xl font-semibold mt-5'>Experience Authentic Indian Cuisine: Let Our Expert Chef Take You on a Culinary Journey</p></div>
       </div>
        </div>


      
      </ReactSimplyCarousel>
    </div>

    <Categorieschef></Categorieschef>


            {/* <Carousel >
              <div> <h1 className='text-black carouselText mt-5 text-start'>Authentic Indian Flavors Straight from the Kitchen of a Master Chef!   </h1></div>
      <div> <img className='photos' src='../../../public/cover6.jpg' alt="" /></div>
      <Carousel.Item  >
       <Row>  
      <Col lg={6}>
        <img className='photos' src='../../../public/cover6.jpg' alt="" /></Col >
     <Col lg={6} >  </Col>
     </Row>
      </Carousel.Item>
      <Carousel.Item  >
       <Row>  
      <Col lg={6}>
        </Col >
     <Col lg={6} >  </Col>
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
    {/* </Carousel> */}
       {/* */}    

  
 
        

        
  <div className='containers'>
  <h2 className='text-center text-5xl text-black mb-11'>Bringing Families Together</h2>
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
<RecentNewsAndSHows></RecentNewsAndSHows>

<PeoplesReview></PeoplesReview>


<ReactTopdf/>

        </div>
    );
};

export default Home;
// import React, { useState } from 'react';

import { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
// import ReactTopdf from '../../reactToPdf/ReactTopdf';

const Header = () => {
  const {user,logout}=useContext(AuthContext)
  console.log(user)
  

  const handlelogout=()=>{
      logout()
      .then(result=>{})
      .catch(error=>{
          console.log(error.message)
      })
  }
    // const [activelink,setActivelink]=useState(false)

    return (

     

      <div>
  
         <h1 className='text-center font-rajsthan text-gray-300'>Rajsthani Delights</h1>
         <div className="navbar bg-base-100  w-5/5 mx-auto   photo">
  <div className="flex">
  <a className="btn btn-ghost normal-case text-xl text-white">Rajsthani </a>
  <div className='flex '>

<div>  <ul className='flex'>
    <li className='text-black text-1xl font-semibold hover:bg-gray-200 rounded-md p-1 my-3 mx-2 duration-200 bg-white'>
                  <NavLink to='/home' className={({isActive})=> isActive? 'text-blue-600': 'default' }> Home</NavLink>
              </li>
            
              <li className='text-black text-1xl font-semibold hover:bg-gray-200 rounded-md p-1  my-3 mx-2 duration-200  bg-white'>
                  <NavLink to='/blog' className={({isActive})=> isActive? 'text-blue-600': 'default' }> Blog</NavLink>
              </li>
          
              <li className='text-black text-1xl font-semibold hover:bg-gray-200 rounded-md p-1  my-3 mx-2 duration-200  bg-white'>
                  <NavLink to='/register' className={({isActive})=> isActive? 'text-blue-600': 'default' }> register</NavLink>
              </li>
              <li className='text-black text-1xl font-semibold rounded-mdduration-200  rounded-md'>
                
                {user ?<span><button className='bg-red-300 rounded-md p-1  my-3 mx-2  hover:bg-orange-500' onClick={handlelogout}> log out</button></span>   :<NavLink to='/login' className={({isActive})=> isActive? 'text-blue-600': 'default' }> <p className='bg-blue-200 my-3 mx-2 rounded-md p-1'>login</p></NavLink> }
            </li>

         

  </ul></div>
  {
          user &&      <div className="tooltip" data-tip={user.displayName===null? "no name found": user.displayName}>
            
<div className='flex'><p>profile</p>      <img  className='rounded-full w-12 ' src={user.photoURL} alt="" /> </div>
     </div>
         }

  </div>
  </div>

  </div>
</div>
      // </div>
     
    //     <div>

          
    //       
    //         <Navbar className='navbar photo mx-auto' >
    //     <Container>
        
    //       <Nav  className="mx-auto nav">
    //       {/* className={({isActive})=> isActive? 'text-blue-600': 'default' */}
              
    // <li > <Link to="/" className='list'>Home</Link></li>
    // <li >   <Link to="/about" className='list'>about</Link></li>
    // <li >  <Link to="/blog" className='list'>blog</Link> </li>
    
    //       </Nav>
    //     </Container>
        
    //   </Navbar>

  
            
    //     </div>
    );
};

export default Header;
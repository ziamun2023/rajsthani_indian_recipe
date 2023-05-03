// import React, { useState } from 'react';

import { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';

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
         <h1 className='text-center font-rajsthan'>Rajsthani Delights</h1>
         <div className="navbar bg-base-100  w-4/5 mx-auto  photo">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-black">Rajsthani </a>
    <ul className='mx-auto flex'>
    <li className='text-black text-2xl font-semibold hover:bg-gray-200 rounded-md p-3 duration-200'>
                  <NavLink to='/home' className={({isActive})=> isActive? 'text-blue-600': 'default' }> Home</NavLink>
              </li>
              <li className='text-black text-2xl font-semibold hover:bg-gray-200 rounded-md p-3 duration-200'>
                  <NavLink to='/about' className={({isActive})=> isActive? 'text-blue-600': 'default' }> About</NavLink>
              </li>
              <li className='text-black text-2xl font-semibold hover:bg-gray-200 rounded-md p-3 duration-200'>
                  <NavLink to='/blog' className={({isActive})=> isActive? 'text-blue-600': 'default' }> Blog</NavLink>
              </li>
              <li className='text-black text-2xl font-semibold hover:bg-gray-200 rounded-md p-3 duration-200'>
                  <NavLink to='/login' className={({isActive})=> isActive? 'text-blue-600': 'default' }> login</NavLink>
                  {user &&<span>welcome- <span className='bg-gra bg-yellow-500 text-sm rounded-md'>{user.email} </span><button onClick={handlelogout}> log out</button></span>}
              </li>
              <li className='text-black text-2xl font-semibold hover:bg-gray-200 rounded-md p-3 duration-200'>
                  <NavLink to='/register' className={({isActive})=> isActive? 'text-blue-600': 'default' }> register</NavLink>
              </li>

              register

  </ul>
  </div>

 
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          
          </div>
        
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
      </div>
     
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


import { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';

const Header = () => {
  const {user,logout}=useContext(AuthContext)
  // console.log(user.photoURL)
  

  const handlelogout=()=>{
      logout()
      .then(result=>{})
      .catch(error=>{
          // console.log(error.message)
      })
  }


    return (

      <div className='w-full h-full'>
  
 <div className='flex justify-between my-10'>

 <div className='flex  '><h1 className='text-gray-300 rounded-md my-auto py-1 px-3    bg-base-100 text-4xl tracking-wide '>Rajsthani </h1><h1 className='text-yellow-500 text-2xl font-semibold mx-2 my-auto hover:tracking-wide'>Delights</h1>
  
  </div>
  
  <div>
 
  {
       user &&      <div className="tooltip" data-tip={user.displayName===null? "no name found": user.displayName}>
         
<div className='flex'><p ><button className='bg-red-300 rounded-md p-1  my-3 mx-2  hover:bg-orange-500 text-black' onClick={handlelogout}> log out</button> </p>      <img  className='rounded-full w-12 ' src={user.photoURL} alt="" /> </div>
  </div>
      }

  </div>


 </div>
 <div className=" photo w-full mx-auto ">
      
      <div className="flex justify-center">
    <div>
     <ul className='flex '>
        <li className='text-gray-800 font-medium tracking-wide  hover:bg-slate-300 rounded-md p-1 my-3 mx-2 px-5 duration-200 bg-white'>
                      <NavLink to='/home' className={({isActive})=> isActive? 'text-blue-700': 'default' }> Home</NavLink>
                  </li>
               
            
                
                  <li className='text-gray-800 font-medium tracking-wide  hover:bg-slate-300 rounded-md p-1 my-3 mx-2 px-5 duration-200 bg-white'>
                      <NavLink to='/blog' className={({isActive})=> isActive? 'text-blue-400': 'default' }> Blog</NavLink>
                  </li>
              {!user &&    
                 <li className='text-gray-800 font-medium tracking-wide  hover:bg-slate-300 rounded-md p-1 my-3 mx-2 px-5 duration-200 bg-white'>
                <NavLink to='/register' className={({isActive})=> isActive? 'text-blue-400': 'default' }> register</NavLink>
            </li>}
           
              
                    
                    {!user &&   <li className='text-gray-800 font-medium tracking-wide  hover:bg-slate-300 rounded-md p-1 my-3 mx-2 px-5 duration-200 bg-white'>
                    <NavLink to='/login' className={({isActive})=> isActive? 'text-blue-400': 'default' }> <p >login</p></NavLink>
                  </li>
          
                  }
               
     </ul></div>
      </div>
     </div>
</div>

     

    );
};

export default Header;
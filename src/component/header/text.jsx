<div className='w-full h-full '>
 <div >

 ccccc
<div className='flex justify-end'>
{
          user &&      <div className="tooltip flex" data-tip={user.displayName===null? "no name found": user.displayName}>
            
<div className='flex'><div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn">Profile</label>
  <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-32">
    <li><a> <button  onClick={handlelogout}> log out</button></a></li>
    <li><a>Settings</a></li>
    <li><a>Show Profile</a></li>
    <li><a><div className='visible'> <img  className='rounded-full w-12 ms-2 me-6 ' src={user.photoURL} alt="" /></div></a></li>
  </ul>
</div>      </div> <div className=''> <img  className='rounded-full w-12 ms-2 me-6 ' src={user.photoURL} alt="" /></div>
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
              {
                user && <li><img src={user.photoURL} alt="" /></li>
              }
 </ul></div>
  </div>
 </div>
</div>
import React, { useState } from 'react';
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    const [activelink,setActivelink]=useState(false)

    return (
        <div>
            <h1 className='text-center font-rajsthan'>Rajsthani Delights</h1>
            <Navbar className='navbar photo mx-auto' sticky='top'>
        <Container>
        
          <Nav  className="mx-auto nav">
          {/* className={({isActive})=> isActive? 'text-blue-600': 'default' */}
              
    <li > <Link to="/blog" className='list'>Home</Link></li>
    <li >   <Link to="/about" className='list'>about</Link></li>
    <li >  <Link to="/blog" className='list'>blog</Link> </li>
    
          </Nav>
        </Container>
        
      </Navbar>

  
            
        </div>
    );
};

export default Header;
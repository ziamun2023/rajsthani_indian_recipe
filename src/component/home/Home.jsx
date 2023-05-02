import React, { useEffect, useState } from 'react';
// import { AwesomeButton } from 'react-awesome-button';
// import 'react-awesome-button/dist/styles.css';
const Home = () => {
    const [data,setData]=useState(null)
  
    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res=>res.json())
       
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            {/* home <AwesomeButton type="primary">Button</AwesomeButton> */}
        </div>
    );
};

export default Home;
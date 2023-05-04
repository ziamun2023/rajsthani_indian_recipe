import React from 'react';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='h-full bg-gray-700'>
          <div className='grid lg:grid-cols-3'>
            <div className='ms-5'>
               <div className='flex bg-red-600 w-52 rounded-lg mt-10 '> <p className='text-white rounded-md'>find us on twitter</p> <p><AiFillTwitterCircle/></p></div>
               <div className='flex bg-red-600 w-52 rounded-lg mt-3'> <p  className='text-white rounded-md'> find us on facebook  </p><p><AiFillFacebook/></p></div>
                <p>find us on </p>
            </div>
            <div>
                <p className='text-center text-white text-2xl'>Terms and conditions</p>
                <p>Use of the Website: A section that outlines the terms of use of the website, including who can use it, how it can be used, and any prohibited activities.</p>
                <p>Liability: A section that outlines the website's liability, including any disclaimers, limitations of liability, and indemnification provisions.

Privacy: A section that outlines the website's privacy policy, including how user data is collected, used, and protected.</p>
            </div>
            <div>
                <p className='text-2xl text-white'>address</p>
                <p>Banghla city , Rajoishori Area , Fifth street </p>
                <p><b>Phone number</b>: +998223412332 </p>
                <p>Rajsthan</p>
            </div>
          </div>
        </div>
    );
};

export default Footer;
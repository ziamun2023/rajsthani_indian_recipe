import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import About from '../component/About/About';
// import About from '../component/About/About';

const ReactTopdf = () => {


    const componentref=useRef()
const pdf=useReactToPrint(
  {  content: ()=>componentref.current,
    documentTitle:'emp-data',
    onafterprint:()=>alert('print succes')}

)

        return (
        <div ref={componentref}>
         <About/>
          
           <div className=' w-full mx-auto mt-10'>

           <button className='btn text-center ' onClick={pdf}>download pdf or print</button>

           </div>
        </div>
    );
};

export default ReactTopdf;
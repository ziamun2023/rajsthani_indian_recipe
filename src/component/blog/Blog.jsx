import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-5xl text-black'>
            Tell us the differences between uncontrolled and controlled components.
            </h1>
            <p>A controlled component is a componenet which is controlled by React state, on the other side  an uncontrolled component  is a kind of component that   maintains its own internal state. 
            In React, controlled components  behavior controlled by the parent component. These components alwasy depends on props passed passed by the parent component to update their state and behavior. but Uncontrolled componenet  manage their own state itself internally. 
            </p>
            <h1 className='text-5xl text-black'>How to validate React props using PropTypes</h1>
            <p>we can validate React props using PropTypes, first of all we can import the proptypes library from the 'prop-types' package and then define the propTypes object as a static property of our component. Within this object, we can define the type, requiredness, and other validation rules for each prop. in the mean time of running React will check the proptypes against the actual props passed to the component and issue warnings in the console if they don't match. This helps catch errors early and ensure the correct usage of our components.</p>
            <h1 className='text-5xl text-black'>
            Tell us the difference between nodejs and express js.
            </h1 >
            <p> Node.js  allows developers to run JavaScript code on the server-side. node js is an open source and cross platform runtime environmetn. and it helps javascript code run outside browser. Express.js, on the other hand, is a application framework .it is built based on node js. It only do the process of building web applications by providing features such as middleware, routing, and templating. Express.js is specifically designed for web development. Express.js helps building   scalable and maintainable web applications.</p>
            <h1 className='text-5xl text-black'>What is a custom hook, and why will you create a custom hook?</h1>
            <p>Creating Custom hook is simply a method of using the same logic with many componenet without any hastle. For example if any developer needs to use the fetch logic in many component for multiple time , he will extract the fetch logic to custom hook onetime only then developers can use it multiple times . </p>
        </div>
    );
};

export default Blog;
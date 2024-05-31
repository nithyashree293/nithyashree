import React from 'react';
import img2 from './img/aboutimg.jpg';


function About() {
  return (
    <div>
      <h1>About us</h1>  
      <h3>online shopping has become a major disruptor in the retail industry as consumers can now search for product information and place product orders across different regions. Online retailers deliver their products directly to the consumers' home, offices, or wherever they want</h3>
      <img src={img2}height={250}width={300}></img>
      <h1>Contact us</h1>
      <h3>Email: shop_here@gmail.com</h3>
      <h3>insta: instagram.com/shop_here/</h3>
      <h3>facebook: www.facebook.com/shop_here</h3>
      </div>
  );
}


export default About;
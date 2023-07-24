import React from 'react';
import Footer from './Footer';
import './thank.css'; // Import the thank.css file

const Thank = () => {
  return (
    <div className="container1"> {/* Use the 'container' class from thank.css */}
      <h2 className="heading1">
        THANK YOU FOR VISITING THE WEATHER APP 
      </h2>
      <h2 className="subheading">
        HAVE A GREAT DAY.
      </h2>
      <Footer />
    </div>
  );
};

export default Thank;

import React from 'react';
import Footer from './Footer';
import './thank.css'; 
import VideoBackground from './VideoBackground'; 

const Thank = () => {
  return (
    <div className="container1"> 
      <VideoBackground /> 
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


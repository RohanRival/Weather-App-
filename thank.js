import React from 'react';
import Footer from './Footer';
import './thank.css'; // Import the thank.css file
import VideoBackground from './VideoBackground'; // Import the VideoBackground component

const Thank = () => {
  return (
    <div className="container1"> {/* Use the 'container1' class from thank.css */}
      <VideoBackground /> {/* Use the VideoBackground component */}
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


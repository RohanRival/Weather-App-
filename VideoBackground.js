// VideoBackground.js
import React from 'react';
import videoBg from './videobg.mp4'; // Update the path to your video file

const VideoBackground = () => {
  return (
    <video className="video-background" autoPlay loop muted>
      <source src={videoBg} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;

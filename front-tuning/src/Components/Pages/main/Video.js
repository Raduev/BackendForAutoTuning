import React from 'react';
import videoBg from '../../../assets/bg-video.mp4';
import { Link, animateScroll } from 'react-scroll'

const Video = () => {
  return (
    <div className='video'>
      <video autoPlay loop muted className="bgvideo" id="bgvideo">
        <source src={videoBg} type="video/mp4"></source>
      </video>
      <button><Link to='content-cars' smooth={true} duration={700}>Хочу тюнинг!</Link></button>
    </div>
  );
};

export default Video;
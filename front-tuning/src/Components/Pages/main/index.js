import React from 'react';
import './main-fon-styles.css'
import videoBg from '../../../assets/bg-video.mp4'
import Video from './Video';
import Content from './Content';

const Main = () => {

  return (
    <div className='main'>
      <Video />
      <Content />
    </div>
  );
};

export default Main;
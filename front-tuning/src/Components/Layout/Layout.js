import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer';
import './layout-style.css'

const Layout = () => {
  return (
    <div id='wrapper'>
      <Header />
      <Outlet />
      {/*<Footer />*/}
    </div>
  );
};

export { Layout };
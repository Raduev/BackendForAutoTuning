import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import './module.style.css'
import { useSelector } from 'react-redux';
import userLogo from "../../../assets/user.png"

const Header = () => {

  const token = useSelector(state => state.application.token)

  return (
    <header>
      <div>
        <a href="/">
          <img className='logo' src={logo}/>
        </a>
      </div>
      <ul className='center-nav'>
        <span>
          <li><NavLink to="/services">Услуги</NavLink></li>
          <li><NavLink to="/company">О компании</NavLink></li>
          <li><NavLink to="/contacts">Контакты</NavLink></li>
        </span>
      </ul>
      <div className='right-nav'>
        { token ? <Link to='/profile'>Мой профиль</Link> : <Link to='/signIn'>Войти</Link> }
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import {useSelector } from 'react-redux';
import './header.css';

const Header = () => {

  const currentUser = useSelector(state => state.currentUser);

  return (
    <>
      <header>
        <h1>React Redux</h1>
        <h1>{currentUser.user?currentUser.user.name:'Anonimo'}</h1>
      </header>
    </>
  ) 
}

export default Header;


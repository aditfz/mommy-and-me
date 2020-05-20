import React from 'react';
import './style/index.css';
function Header() {
  return (
    <div className='header'>
      <img
        className='header__logo'
        src='https://www.graphicsprings.com/filestorage/stencils/9ea51687148f4cfb53737a025d94caaa.png?width=500&height=500'
        alt='logo'
      />
      <h1 className='header__title'>Mommy & Me</h1>
    </div>
  );
}
export default Header;

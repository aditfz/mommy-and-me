import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/index.css';
function NavBar(props) {
  const [show, setShow] = useState(false);
  const showNav = () => {
    setShow(!show);
  };
  return (
    <div>
      <nav className='navLargeScreen'>
        <ul className='nav__list'>
          <li>
            <Link className='nav__link nav--link' to='/'>
              HomePage
            </Link>
          </li>
          <li>
            <Link className='nav__link nav--link' to='/contact-us'>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <button className='nav__button' onClick={showNav}>
        &#9776;
      </button>
      {show ? (
        <div>
          <nav className='navSmallScreen'>
            <ul className='nav__list'>
              <li>
                <Link className='nav__link navS--link' to='/'>
                  HomePage
                </Link>
              </li>
              <li>
                <Link className='nav__link navS--link' to='/contact-us'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

export default NavBar;

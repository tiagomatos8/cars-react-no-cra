import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Header = props => {
  return (
    <div>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' onClick={() => console.log('history.push("/years")')}>
            <img
              src={props.logo}
              width='112'
              height='28'
            />
          </a>

          <a
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <Button color='is-success' isRounded={true} label='1300 GoLend' icon='fab fa-twitter' />
                <a className='button is-light'>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  logo: PropTypes.string
};

export default Header;

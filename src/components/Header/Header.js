import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Image from '../Image/Image';

const Header = props => {
  return (
    <div>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' onClick={() => console.log('history.push("/years")')}>
            {/* crate a image component */}
            <Image
              imageUrl='https://images.ctfassets.net/cvf73uxjrvk8/4SqBLy8f5lTANevQmm9U6O/5e8a29512ecbf8d5307eb1890e34bcb2/logo-color.svg'
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
  
};

export default Header;

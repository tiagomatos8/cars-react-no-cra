import React, { useState } from 'react';

import Button from '../Button/Button';
import Image from '../Image/Image';
import { Link } from '../../utils/routes/router';

import './Header.scss';

/**
 * Header - Top header of pages
 *
 * @param {*} props
 */
const Header = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='Header-component'>
      <nav
        className='navbar is-spaced'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='container'>
          <div className='navbar-brand'>
            <div className='navbar-item'>
              <Link to='/years'>
                <Image
                  imageUrl='https://images.ctfassets.net/cvf73uxjrvk8/4SqBLy8f5lTANevQmm9U6O/5e8a29512ecbf8d5307eb1890e34bcb2/logo-color.svg'
                  size='is-120-28'
                />
              </Link>
            </div>

            <a
              role='button'
              className={`navbar-burger ${menuOpen && 'is-active'}`}
              aria-label='menu'
              aria-expanded='false'
              data-target='navBarTop'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>

          <div className={`navbar-menu ${menuOpen && 'is-active'}`}>
            <div className='navbar-end'>
              <div className='navbar-item'>
                <Button
                  color='is-success'
                  isRounded={true}
                  label='1300 GoLend'
                  icon='fas fa-phone'
                  isOutlined={true}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {};

export default Header;

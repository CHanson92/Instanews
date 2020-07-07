import React from 'react';
import logo from '../assets/images/nyt-logo.svg';
import Selector from './Selector';

const Header = ({ selectFilter }) => (
    <header>
        <div>
            <img className='logo' alt='NY Times logo' src={logo} />
        </div>
        <Selector selectFilter={selectFilter} />
    </header>
);

export default Header;

import React from 'react';
import logo from '../assets/images/nyt-logo.svg';

const Header = props => {
    let filter = props.filter;
    let onChange = props.onChange();
    return (
        <header>
            <div>
                <img className='logo' src={logo} />
            </div>
            <section className='chooseasection'>
                Choose a section:
                <select id='suggestions' onChange={onChange}>
                    <option value='' defaultValue>
                        Sections ...
                    </option>
                    {filter.map((i, index) => (
                        <option key={index} value={i}>
                            {i.charAt(0).toUpperCase() + i.slice(1)}
                        </option>
                    ))}
                </select>
            </section>
        </header>
    );
};

export default Header;

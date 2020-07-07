import React from 'react';
import { filters } from '../utils/strings';

const Selector = ({ selectFilter }) => (
    <section className='chooseasection'>
        Choose a section:
        <select id='suggestions' onChange={selectFilter}>
            <option value='' defaultValue>
                Sections ...
            </option>
            {filters.map((i, index) => (
                <option key={index} value={i}>
                    {i.charAt(0).toUpperCase() + i.slice(1)}
                </option>
            ))}
        </select>
    </section>
);

export default Selector;

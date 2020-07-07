import React from 'react';
import loadingIndicator from '../assets/images/ajax-loader.gif';

const Loading = () => (
    <div className='loading'>
        <img alt='' src={loadingIndicator} />
    </div>
);

export default Loading;

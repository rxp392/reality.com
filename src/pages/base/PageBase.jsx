import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import './../../styles/App.css';

function PageBase(props) {
    // eslint-disable-next-line
    const [userInfo, setUserInfo] = useState({username: 'user'});

    return(
        <div className='App'>
            <SiteHeader tabs={['Home', 'Map', 'Chat', 'Profile']} />
            <div className='content'>
                <Outlet context={{userInfo: userInfo}} />
            </div>
        </div>
    );
}

export default PageBase;
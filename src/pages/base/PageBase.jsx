import React, { useState } from 'react';
import './../../App.css';
import { Outlet } from 'react-router-dom';
import NavTabs from './NavTabs';

function PageBase(props) {
    const [userInfo, setUserInfo] = useState({username: 'user'});

    return(
        <div className="App">
            <NavTabs tabs={['Home', 'Map', 'Chat', 'Profile']}>
                <Outlet context={{userInfo: userInfo}} />
            </NavTabs>
        </div>
    );
}

export default PageBase
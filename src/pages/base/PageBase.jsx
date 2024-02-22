import React from 'react';
import './../../App.css';
import { Outlet } from 'react-router-dom';
import NavTabs from './NavTabs';

function PageBase(props) {

    return(
        <div className="App">
            <NavTabs tabs={['Home', 'Map', 'Chat','Profile']}>
                <Outlet />
            </NavTabs>
        </div>
    );
}

export default PageBase
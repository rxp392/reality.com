import React from 'react';
import './../App.css';
import { Outlet } from 'react-router-dom';

function PageBase(props) {

    return(
        <div className="App">
            <Outlet />
        </div>
    );
}

export default PageBase
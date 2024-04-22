import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NotifyComponent from '../Notifications.jsx';
function NavTabs({ tabs, children }) {
    const path = useLocation().pathname.toLowerCase();
    //navigate routes
    const navigate = useNavigate();
    
    const pathTabs = tabs.map(tab => (
        <button 
            key={tab}
            className='tab-button'
            disabled={path.includes(tab.toLowerCase())}
            onClick={() => navigate(tab)}
        >
            {tab}
        </button>
    ));

    return ( 
        <>
            <div className='tabs'>
                {pathTabs}
                <NotifyComponent/>
            </div>
            <div className='content'>
                {children}
            </div>    
        </>
    );
}

export default NavTabs;
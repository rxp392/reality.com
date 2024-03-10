import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactSearchBox from 'react-search-box';

function SiteHeader({ tabs }) {

    const path = useLocation().pathname.toLowerCase();

    return (
        <div className='header'>
            <span>Reality.com</span>
            <NavTabs tabs={tabs} path={path} />
        </div>
    );
}

function SearchHeader(props) {

    const navigate = useNavigate();

    return (
        <div className='search'>
             {/* we can style the title here */}
            <div className='search-bar'>
                <ReactSearchBox
                    data={[{ key: 'hi', value: 'hi' }] /* need real data at some point */}
                    onSelect={record => navigate(`reviews/${record.item.value}`)}
                    placeholder='Search for an address'
                    clearOnSelect={true}
                />
            </div>
        </div>
    );
}



function NavTabs({ tabs, path }) {
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
        <span className='tabs'>
            {pathTabs}
        </span>
    );
}

export default SiteHeader;
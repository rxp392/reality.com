import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactSearchBox from 'react-search-box';

function SiteHeader({ tabs }) {

    const path = useLocation().pathname.toLowerCase();

    return (
        <div className='header'>
            <SearchHeader />
            <NavTabs tabs={tabs} path={path} />
        </div>
    );
}

function SearchHeader(props) {

    const navigate = useNavigate();

    return (
        <div className='search'>
            <span>Reality.com</span> {/* we can style the title here */}
            <div className='search-bar'>
                <ReactSearchBox
                    data={[{ key: 'hi', value: 'hi' }] /* need real data at some point */}
                    onSelect={record => navigate(`reviews/${record.item.value}`)}
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
        <div className='tabs'>
            {pathTabs}
        </div>
    );
}

export default SiteHeader;
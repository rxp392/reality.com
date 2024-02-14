import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import PageBase from './pages/PageBase';
import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';


function routes() {
    const router = createBrowserRouter([
            {
                path: '/',
                element: <PageBase />,
                children: [
                    { index: true, element: <Navigate to='home' /> },
                    { path: 'home', element: <HomePage /> },
                    { path: 'demo', element: <DemoPage /> }
                ]
            }
        ])

    return router;
}

export default routes;
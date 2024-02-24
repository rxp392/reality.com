import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import PageBase from './pages/base/PageBase';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import ErrorPage from './pages/ErrorPage';
import ProfilePageBase from './pages/base/ProfilePageBase';
import ChatPage from './pages/chat/ChatPage';
import ReviewPageBase from './pages/base/ReviewPageBase';


function routes() {
    const errorRoute = { path: '*', element: <ErrorPage /> };
    const profileRoute = { path: 'profile/:username', element: <ProfilePageBase /> };
    const reviewRoute = { path: 'reviews/:location', element: <ReviewPageBase /> };

    const router = createBrowserRouter([
            {
                path: '/',
                element: <PageBase />,
                children: [
                    { index: true, element: <Navigate to='home' /> },
                    errorRoute,
                    profileRoute,
                    reviewRoute,
                    { path: 'home', element: <HomePage /> },
                    { path: 'chat', element: <ChatPage username={'dummy user'}/> },
                    { path: 'map', element: <MapPage /> },
                ]
            }
        ])

    return router;
}

export default routes;
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import PageBase from './pages/base/PageBase';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import UnknownPage from './pages/UnknownPage';
import ProfilePageBase from './pages/base/ProfilePageBase';
import ChatPage from './pages/chat/ChatPage';
import ReviewPageBase from './pages/base/ReviewPageBase';
import ProfileCard from './pages/ProfileCard';
import ErrorPage from './pages/ErrorPage';


function routes() {
    const errorRoute = { path: '*', element: <UnknownPage /> };
    const profileRoute = { 
        path: 'profile', 
        children: [
            { index: true, element: <ProfileCard/> },
            { path: ':username', element: <ProfilePageBase /> }
        ]
     };
    const reviewRoute = { path: 'reviews/:location', element: <ReviewPageBase /> };

    const router = createBrowserRouter([
            {
                path: '/',
                element: <PageBase />,
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Navigate to='home' /> },
                    errorRoute,
                    profileRoute,
                    reviewRoute,
                    { path: 'home', element: <HomePage /> },
                    { path: 'chat', element: <ChatPage /> },
                    { path: 'map', element: <MapPage /> }
                ]
            }
        ])

    return router;
}

export default routes;
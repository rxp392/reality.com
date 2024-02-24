import React, { useCallback } from 'react';
import ChatFeed from './ChatFeed';

function Conversation({ withUser, username }) {

    const fetchFunction = useCallback(async (pageParam, user) => {
        return ([
            { sender: user, username: username, message: 'hi', timestamp: '1' },
            { sender: username, username: username, message: 'hello', timestamp: '2' }
        ]);
    }, [username]);

    return (
        <main className='conversation'>
            <h2 className='header'>Conversation with {withUser}</h2>
            <ChatFeed fetchFunction={fetchFunction} user={withUser} />
        </main>
    );
}

export default Conversation;
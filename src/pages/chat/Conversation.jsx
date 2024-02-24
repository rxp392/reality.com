import React, { useCallback } from 'react';
import ChatFeed from './ChatFeed';

function Conversation({ withUser, username }) {

    const fetchFunction = useCallback(async (pageParam, user) => {
        const messages = {
            rupika: [
                { sender: user, username: username, message: 'hi it\'s rupika', timestamp: '1' },
                { sender: username, username: username, message: 'hello', timestamp: '2' }
            ],
            zach: [
                { sender: user, username: username, message: 'i think you should kys', timestamp: '1' },
                { sender: username, username: username, message: 'thank you for your kind words', timestamp: '2' }
            ]
        };
        return (messages[user]);
    }, [username]);

    return (
        <main className='conversation'>
            <h2 className='header'>Conversation with {withUser}</h2>
            <ChatFeed fetchFunction={fetchFunction} user={withUser} />
        </main>
    );
}

export default Conversation;
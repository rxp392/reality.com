import React, { useCallback } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import GenericFeed from '../base/GenericFeed';


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
            <GenericFeed 
                fetchFunction={fetchFunction} 
                fetchFuncName={'messages'} 
                dependentInfo={withUser} 
                className={'chat-feed'}
                resultMapping={info => <ChatMessage key={info.timestamp} {...info} />}
                emptyMsg={'Start chatting!'}
                reversed={true}
            />
            <ChatInput withUser={withUser} username={username} />
        </main>
    );
}

export default Conversation;
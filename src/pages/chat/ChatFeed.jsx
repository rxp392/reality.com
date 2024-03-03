import React from 'react';
import ChatMessage from './ChatMessage';
import GenericFeed from '../base/GenericFeed';

function ChatFeed({ fetchFunction, user }) {

    return (
        <GenericFeed 
            fetchFunction={fetchFunction} 
            fetchFuncName={'messages'} 
            dependentInfo={user} 
            className={'chat-feed'}
            resultMapping={info => <ChatMessage key={info.timestamp} {...info} />}
            emptyMsg={'Start chatting!'}
        />
    );
}

export default ChatFeed;
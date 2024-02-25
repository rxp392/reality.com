import React, { useCallback, useState } from 'react';

function ChatInput({withUser, username}) {

    const [chatMessage, setChatMessage] = useState('');
    const sendChat = useCallback((message) => {}, [username, withUser]);

    return(
        <div
            className='chat-input'
        >
            <textarea className='input' placeholder='Type a message' />
            <button onClick={() => sendChat(chatMessage)}> 
                this will look cool at some point
            </button>
        </div>
    );
}

export default ChatInput;
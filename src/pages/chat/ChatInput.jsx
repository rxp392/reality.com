import React, { useCallback, useState } from 'react';

function ChatInput({withUser, username}) {

    const [chatMessage, setChatMessage] = useState('');
    const [sending, setSending] = useState(false);
    const sendChat = useCallback(async (message) => {
        setSending(true);
        await new Promise(r => setTimeout(r, 2000));
        alert(`Sent: ${message}`);
        setChatMessage('');
        setSending(false);
    }, [setChatMessage, setSending/* withUser, username */]);

    return(
        <div
            className='chat-input'
        >
            <textarea 
                className='input'
                placeholder='Type a message' 
                value={chatMessage}
                onChange={event => setChatMessage(event.target.value)}
            />
            <button 
                className='send'
                onClick={() => sendChat(chatMessage)}
                disabled={sending || chatMessage.length === 0}
            > 
                this will look cool at some point
            </button>
        </div>
    );
}

export default ChatInput;
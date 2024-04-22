import React from 'react';

function ChatMessage(props) {
    const { sender, reciever , message, timestamp } = props;
    return (
        <div className='chat-message' >
            <div className={(sender === reciever) ? 'outgoing' : 'incoming'}>
                <h5 className='sender'>{sender}</h5>
                <div className='message-text'>{message}</div>
                <p className='time'>{timestamp}</p>
            </div>
        </div>
    );
}

export default ChatMessage;
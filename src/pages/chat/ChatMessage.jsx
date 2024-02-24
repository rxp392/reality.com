import React from 'react';

function ChatMessage(props) {
    console.log(props);
    const { sender, username, message, timestamp } = props;
    return (
        <div className='message-container' >
            <div className={(sender === username) ? 'outgoing-chat' : 'incoming-chat'}>
                <h5>{sender}</h5>
                <p>{message}</p>
                <p style={{'fontSize': '8px'}}>{timestamp}</p>
            </div>
        </div>
    );
}

export default ChatMessage;
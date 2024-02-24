import React, { useState } from 'react';
import ConversationPage from './ConversationPage';

function ChatPage({ username }) {

    const [selectedChat, setSelectedChat] = useState(null);
    console.log(username);

    return (
        <div className='chat-page'>
            <div>
                <button onClick={() => setSelectedChat('zach')}>zach</button>
            </div>
            {
                (selectedChat == null) ?
                    <div>Select a chat</div> :
                    <ConversationPage withUser={selectedChat} username={username}/>
            }
        </div>
    );
}

export default ChatPage;
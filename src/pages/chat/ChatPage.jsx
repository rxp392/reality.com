import React, { useState } from 'react';
import Conversation from './Conversation';
import { useOutletContext } from 'react-router-dom';
import ConversationSelection from './ConversationSelection';

function ChatPage() {
    const {userInfo} = useOutletContext();
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <div className='chat-page'>
            <ConversationSelection userInfo={userInfo} selectionFunction={setSelectedChat} />
            {
                (selectedChat == null) ?
                    <div>Select a chat</div> :
                    <Conversation withUser={selectedChat} username={userInfo.username}/>
            }
        </div>
    );
}

export default ChatPage;
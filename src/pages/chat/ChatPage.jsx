import React, { useState } from 'react';
import Conversation from './Conversation';
import { useOutletContext } from 'react-router-dom';

function ChatPage() {

    const [selectedChat, setSelectedChat] = useState(null);
    const {userInfo} = useOutletContext();

    return (
        <div className='chat-page'>
            <div>
                <button onClick={() => setSelectedChat('zach')}>zach</button>
                <button onClick={() => setSelectedChat('rupika')}>rupika</button>
            </div>
            {
                (selectedChat == null) ?
                    <div>Select a chat</div> :
                    <Conversation withUser={selectedChat} username={userInfo.username}/>
            }
        </div>
    );
}

export default ChatPage;
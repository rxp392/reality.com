import React, { useEffect, useState } from 'react';
import ChatFeed from './ChatFeed';

function ConversationPage({ withUser, username }) {

    const [pageContent, setPageContent] = useState()

    useEffect(() => {
        setPageContent(
            <ChatFeed
                fetchFunction={async (pageParam) => {
                    return ([
                        { sender: withUser, username: username, message: 'hi', timestamp: '1' },
                        { sender: username, username: username, message: 'hello', timestamp: '2' }
                    ]);
                }}
            />
        )
    }, [withUser, username]);

    return (
        <>
            {pageContent}
        </>
    );
}

export default ConversationPage;
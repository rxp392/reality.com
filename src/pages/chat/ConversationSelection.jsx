import React, { useMemo } from 'react';

function ConversationSelection({ username, selectionFunction }) {

    const fetchFunction = (username) => ['rupika', 'zach']; // Replace with real backend access for user's conversations

    const conversationList = useMemo(() => {
        return fetchFunction(username);
    }, [username]);

    return (
        <menu className='conversation-select'>
            {conversationList.map(entry => <ConversationButton key={entry} name={entry} selectionFunction={selectionFunction} />)}
        </menu>
    );
}

function ConversationButton({name, selectionFunction}) {

    return (
        <button 
            className='select'
            onClick={() => selectionFunction(name)}
        >
            {name}
        </button>
    );
}

export default ConversationSelection;
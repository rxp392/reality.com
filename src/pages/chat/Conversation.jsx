import React, { useCallback } from 'react';
import ChatFeed from './ChatFeed';
import ChatInput from './ChatInput';
import { collection ,getFirestore, query, doc,limitToLast, onSnapshot,where,orderBy,updateDoc} from "firebase/firestore";

let messages = {
};

function Conversation({ withUser, username}) {

    const fetchFunction = useCallback(async (pageParam, user) => {
        //TODO: fix bugs with the display of the messages why is it constantly retrieving, not displaying on render , prettify chat and add online button and user face and can add more chat to the bar
        console.log(withUser,username)
        const db = getFirestore();
        const q = query(collection(db,`${withUser}`),orderBy("timestamp"))
        let userrr = undefined;
        const unsubscribe = onSnapshot(q, (snapshot) => {
            messages = {}
            snapshot.docChanges().forEach((change) => {
                if ( change.type === "added") {
                    console.log(change.doc.data())
                    let sn = change.doc.data()
                    const a = messages[sn.reciever] === undefined ? messages[sn.reciever] = []:''
                    console.log(
                        messages[sn.reciever]
                    )
                    messages[sn.reciever].push({ sender: sn.sender1, reciever: sn.reciever, message: sn.message, timestamp:sn.timestamp})  
                }});
            
          });
          console.log(messages)
          return (messages[withUser]);

    }, [withUser]);

    return (
        <main className='conversation'>
            <h2 className='header'>Conversation with {withUser}</h2>
            <ChatFeed fetchFunction={fetchFunction} user={withUser} />
            <ChatInput withUser={withUser} username={username} />
        </main>
    );
}

export default Conversation;
import React, { useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import ChatMessage from './ChatMessage';

function ChatFeed({ fetchFunction, user }) {
    const fetchMessages = useCallback(async (pageParam) => {
        const results = await fetchFunction(pageParam, user);
        //stored in each data.page field
        return { results, nextPage: pageParam + 1, totalPages: 1 };
    }, [fetchFunction, user]);

    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage
    } = useInfiniteQuery([ user], 
        ({ pageParam = 1 }) => fetchMessages(pageParam), 
        {
            refetchOnMount: true,
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage) => (lastPage.nextPage < lastPage.totalPages) ? lastPage.nextPage : undefined
        }
    );

    return (
        <>
            {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                        <p>There was an error</p>
                    ) : ((!!data && !!(data.pages) && !!(data.pages[0]) && !!(data.pages[0].results) && !!(data.pages[0].results[0])) ?
                            <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage} className='chat-feed'>
                                {data.pages.map((page) => page.results.map(info => <ChatMessage {...info} />))}
                            </InfiniteScroll>
                            :
                            <h3>Start chatting!</h3>
                    )
            }
        </>
    );
}

export default ChatFeed;
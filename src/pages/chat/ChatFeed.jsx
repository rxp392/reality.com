import React, { useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import ChatMessage from './ChatMessage';

function ChatFeed({ fetchFunction }) {
    const fetchMessages = useCallback(async (pageParam) => {
        const results = await fetchFunction(pageParam);
        return { results, nextPage: pageParam + 1, totalPages: 1 };
    }, [fetchFunction]);

    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage
    } = useInfiniteQuery('messages', 
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
                            <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage} className='chat-conversation'>
                                <>
                                    <p>hi</p>
                                    {data.pages.map((page) => page.results.map(info => <ChatMessage key={info.timestamp} {...info} />))}
                                </>
                            </InfiniteScroll>
                            :
                            <h3>Start chatting!</h3>
                    )
            }
        </>
    );
}

export default ChatFeed;
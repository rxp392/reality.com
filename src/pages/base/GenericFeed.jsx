import React from 'react';

function GenericFeed({ fetchFunction, fetchFuncName, dependentInfo, className, resultMapping, emptyMsg, reversed }) {
        
    const fetchResults = useCallback(async (pageParam) => {
        const results = await fetchFunction(pageParam, dependentInfo);
        return { results, nextPage: pageParam + 1, totalPages: 1 };
    }, [fetchFunction, dependentInfo]);

    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage
    } = useInfiniteQuery([fetchFuncName, dependentInfo], 
        ({ pageParam = 1 }) => fetchResults(pageParam), 
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
                            <InfiniteScroll 
                                hasMore={hasNextPage} 
                                loadMore={fetchNextPage} 
                                reversed={reversed}
                                className={className}
                            >
                                {data.pages.map(page => page.results.map(info => resultMapping(info)))}
                            </InfiniteScroll>
                            :
                            <h3>{emptyMsg}</h3>
                    )
            }
        </>
    );
}

export default GenericFeed;
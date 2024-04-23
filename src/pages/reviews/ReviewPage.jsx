import React from 'react';
import { useParams } from 'react-router-dom';

import GenericFeed from '../base/GenericFeed';
import Review from './Review';
import './../../styles/review.css';

function ReviewPage(props) {

    const location = useParams().location;
    const fetchFunction = async (pageParam, info) => {
        return [
            {reviewerInfo: { pic: 'pic', reviewer: 'me', stars: 4, count: 5 }, text: 'terrible place', likeCount: 2}
        ];
    }; //Make this do something later

    return (
        <div className='review-page'>
            <div>{`Viewing reviews for: ${location}`}</div>
            <div className='review-view'>
                {/* https://developers.google.com/maps/documentation/streetview/?_gl=1*1py5yxj*_ga*NzU2NjE2NjYzLjE3MDk1MDQwMjU.*_ga_NRWSTWS78N*MTcwOTUwNDAyNS4xLjEuMTcwOTUwNDAzOS4wLjAuMA.. */}
                Streetview here?
            </div>
            <GenericFeed 
                fetchFunction={fetchFunction} 
                fetchFuncName={'reviews'}
                dependentInfo={location} 
                className={'review-feed'}
                resultMapping={info => <Review key={info.timestamp} {...info} />}
                emptyMsg={'No reviews found'}
                reversed={false}
            />
        </div>
    );
}

export default ReviewPage;
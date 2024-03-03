import React from 'react';
import { useParams } from 'react-router-dom';
import './../../styles/review.css';
import GenericFeed from '../base/GenericFeed';
import Review from './Review';

function ReviewPage(props) {

    const location = useParams().location;
    const fetchFunction = async () => {}; //Make this do something later

    return (
        <div className='review-page'>
            <text>{`Viewing reviews for: ${location}`}</text>
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
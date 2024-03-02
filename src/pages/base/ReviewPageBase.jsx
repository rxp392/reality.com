import React from 'react';
import { useParams } from 'react-router-dom';

function ReviewPageBase(props) {
    const location = useParams().location;

    return(
        <div>
            <text>{`Viewing reviews for: ${location}`}</text>
        </div>
    );
}

export default ReviewPageBase
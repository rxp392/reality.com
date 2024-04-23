import React from 'react';

function Review({ reviewerInfo, text, likeCount }) {

    return (
        (reviewerInfo.reviewer) ?
            <div className='review' key={reviewerInfo.reviewer}>
                <ReviewHeader {...reviewerInfo} />
                <ReviewBody text={text} />
                <ReviewFooter likeCount={likeCount} />
            </div>
            : <></>
    );
}

function ReviewHeader({ pic, reviewer, stars, count }) {

    return (
        <div className='header'>
            <ProfilePic image={pic} />
            <ReviewProfileInfo reviewer={reviewer} count={count} />
            <ReviewStars stars={stars} />
        </div>
    )
}

function ProfilePic({ image }) {

    return (
        <span className='pic'>
            {/* profile pic */}
        </span>
    );
}

function ReviewProfileInfo({ reviewer, count }) {

    return (
        <span className='info'>
            {/* username */}
            {/* spacer */}
            {`${count} reviews`}
        </span>
    );
}

function ReviewStars({ stars }) {

    return (
        <span className='stars'>
            {/* stars */}
        </span>
    );
}

function ReviewBody({ text }) {

    return (
        <div className='body'>
            {text}
        </div>
    );
}

function ReviewFooter({ likeCount }) {

    return (
        <div>
            <text style={{'margin': '0 8'}}>Like count: {likeCount}</text>
            <button onClick={event => {}} >Like</button>
        </div>
    );
}


export default Review;
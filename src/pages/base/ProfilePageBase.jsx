import React from 'react';
import { useParams } from 'react-router-dom';

function ProfilePageBase(props) {
    const username = useParams().username;

    return(
        <div>
            <text>{`This user's name is: ${username}`}</text>
        </div>
    );
}

export default ProfilePageBase
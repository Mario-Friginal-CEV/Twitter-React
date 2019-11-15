import React, { ReactElement } from 'react';
import '../styles/profileactivity.css';


const ProfileActivity = (): ReactElement => {

    return (
        <div className="profileActivity">
            <div className="partesProfile"><a>Tweets</a></div>
            <div className="partesProfile"><a>Tweets y respuestas</a></div>
            <div className="partesProfile"><a>Multimedia</a></div>
        </div>
    );
}

export default ProfileActivity;
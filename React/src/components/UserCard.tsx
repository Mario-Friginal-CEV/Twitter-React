import React, { ReactElement } from 'react';
import { User } from '../models/User';
import '../styles/usercard.css';


interface UserProps extends User {
    backImage?: string
    picture?: string
    name?: string
    username?: string
    tweets?: number
    followed?: number
    followers?: number
}

const UserCard = (props: UserProps): ReactElement => {
    console.log("PROPS DE LA USERCARD");
    console.log(props);
    const { backImage, picture, name, username, tweets, followed, followers } = props;

    return (
        <div className="userCard">
            <img src={backImage} />
            <div className="data">
                <div className="profileImage">
                    <img src={picture} className="image" />
                </div>
                <div className="userData">
                    <div className="name">
                        <p><a href="http://localhost:3000/profile/1" className="text-secondary">{name}</a></p>
                    </div>
                    <div className="userName">
                        <a href="http://localhost:3000/profile/1">{username}</a>
                    </div>
                </div>
            </div>
            <div className="tweetsFollows">
                <div className="block">
                    <div className="top">Tweets</div>
                    <div className="under">{tweets}</div>
                </div>
                <div className="block">
                    <div className="top">Siguiendo</div>
                    <div className="under">{followed}</div>
                </div>
                <div className="block">
                    <div className="top">Seguidores</div>
                    <div className="under">{followers}</div>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
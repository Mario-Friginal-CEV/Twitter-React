import React, { ReactElement } from 'react';
import { User } from '../models/User';
import '../styles/userprofile.css';


interface UserProfileProps extends User {
    backImage?: string
    picture?: string
    name?: string
    username?: string
    tweets?: number
    followed?: number
    followers?: number
}

const UserProfile = (props: UserProfileProps): ReactElement => {
    const { backImage, tweets, followed, followers, picture } = props;

    return (
        <div className="userprofile">
            <img className="fondito" src={backImage} />
            <div className="follows">
                <img className="fotoPerfil" src={picture} />
                <div className="block">
                    <div className="top">Siguiendo</div>
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
                <div className="block">
                    <button className="editTweet">Editar perfil</button>
                </div>
            </div>
        </div >
    );
}

export default UserProfile;
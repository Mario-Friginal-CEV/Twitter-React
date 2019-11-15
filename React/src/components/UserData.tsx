import React, { ReactElement } from 'react';
import { User } from '../models/User';
import '../styles/userdata.css';


interface UserDataProps extends User {
    name?: string
    username?: string
    description?: string;
    location?: string;
    webpage?: string;
}

const UserData = (props: UserDataProps): ReactElement => {
    const { name, username, description, location, webpage } = props;

    return (
        <div className="usersata">
            <br />
            <br />
            <div>
                <div className="nameData">
                    {name}
                </div>
                <div className="userName">
                    {username}
                </div>
                <div className="descripcion">
                    {description}
                </div>
                <div className="localizacion">
                    <a>{location}</a>
                </div>
                <div className="paginaWeb">
                    <a>{webpage}</a>
                </div>
            </div>

        </div>
    );
}

export default UserData;
import React, { ReactElement } from 'react';
import '../styles/navbar.css';
import { User } from '../models/User';

interface NavBarProps extends User {
    picture?: string
}

const NavBar = (props: NavBarProps): ReactElement => {
    const { picture } = props;
    return (
        < div className="NavBar">
            <div className="NavBarContent">
                <div className="Tabs1">
                    <div className="Box">
                        <div>
                            <a href="http://localhost:3000/"><i className="fas fa-home icon1"></i></a>
                        </div>
                        <div className="textNavBar">Inicio</div>
                    </div>
                    <div className="Box">
                        <div>
                            <a><i className="fas fa-bolt icon1"></i></a>
                        </div>
                        <div className="textNavBar">Momentos</div>
                    </div>
                    <div className="Box">
                        <div>
                            <a><i className="fas fa-bell icon1"></i></a>
                        </div>
                        <div className="textNavBar">Notificaciones</div>
                    </div>
                    <div className="Box">
                        <div>
                            <a><i className="fas fa-envelope icon1"></i></a>
                        </div>
                        <div className="textNavBar">Mensajes</div>
                    </div>
                </div>
                <div className="icon">
                    <img className="iconT" src="https://www.freeiconspng.com/uploads/twitter-transparent-vector-png-25.png" />
                </div>
                <div className="Tabs2">
                    <div className="Box2">
                        <input className="inputStyle is-rounded" placeholder="Buscar en Twitter" />
                    </div>
                    <div className="Box2">
                        <img className="img" src={picture} />
                    </div>
                    <div className="Box2">
                        <button className="buttonTweet">Twittear</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default NavBar;
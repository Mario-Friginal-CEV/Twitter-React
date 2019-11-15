import React, { ReactElement } from 'react';
import Icon from './Icon';
import { Post } from '../models/Post';
import '../styles/tweet.css';


interface TweetProps extends Post {
    key?: string,
    onLike?: Function,
    username: string,
    name?: string,
    id?: string,
    picture?: string,
    date?: string,
    tweet: string,
    liked?: boolean
}


const Tweet = (props: TweetProps): ReactElement => {

    const { name, username, id, key, content, onLike } = props;

    const iconLike = <Icon id={id} iconName="heart" checked={false} key={key} onClick={onLike} />
    const iconRetweet = <Icon id={id} iconName="retweet" checked={false} key={key} onClick={onLike} />
    const iconComents = <Icon id={id} iconName="comment" checked={false} key={key} onClick={onLike} />
    const iconShare = <Icon id={id} iconName="share" checked={false} key={key} onClick={onLike} />

    return (
        <div className="media1">
            <div className="media-left">
                <p className="image is-64x64">
                    <img className="foto" src="https://yt3.ggpht.com/a/AGF-l79HsXrKv5vLONH0SjrLpNdHYSsWFeq7VpHmVg=s900-mo-c-c0xffffffff-rj-k-no" />
                </p>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <div className="postData">
                            <div className="name">{name}MarioFrigi</div>
                            <div className="username">{username}@MarioFrigi</div>
                        </div>
                        <br />
                        <div className="tweetText">
                            {content}
                        </div>
                    </p>
                </div>
                <nav className="level is-mobile">
                    <div className="level-left">
                        <div>
                            {iconComents}
                        </div>
                        <div className="icons">
                            {iconRetweet}
                        </div>
                        <div className="icons">
                            {iconLike}
                        </div>
                        <div className="icons">
                            {iconShare}
                        </div>
                    </div>
                </nav>
            </div>
            <div className="media-right">
                <button className="delete"></button>
            </div>
        </div>
    );
}

export default Tweet;

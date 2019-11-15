import React, { Component } from 'react'
import '../styles/tweetinput.css';

export default class TweetInput extends Component {

    constructor() {
        super();
        this.state = {
            tweet: '',
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            tweet: e,
        })
    }


    render() {

        const { AddTasks } = this.props;

        return (
            <div className="TweetInput">
                <img className="imagePost" src="https://yt3.ggpht.com/a/AGF-l79HsXrKv5vLONH0SjrLpNdHYSsWFeq7VpHmVg=s900-mo-c-c0xffffffff-rj-k-no" />
                <input
                    placeholder="¿Qué está pasando?"
                    type="text"
                    onChange={(e) => this.handleInput(e.target.value)}
                    value={this.state.tweet}
                    className="inputAdd"
                />
                <button onClick={() => AddTasks(this.state.tweet)} className="sendButton">Twittear</button>
                {<div>{AddTasks}</div>}
            </div>
        )
    }
}
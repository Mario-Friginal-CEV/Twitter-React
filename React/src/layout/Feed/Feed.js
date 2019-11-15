import React, { Component } from 'react'
import { CommentService } from '../../services/CommentService';
import { PostService } from '../../services/PostService';
import { UserService } from '../../services/UserService';
import { withRouter } from 'react-router';
import UserCard from '../../components/UserCard';
import Tweet from '../../components/Tweet';
import NavBar from '../../components/NavBar';
import '../../styles/feed.css';
import TweetInput from '../../components/TweetInput';
import * as moked_data from '../../mocked_data';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.commentService = new CommentService();
    this.postService = new PostService();
    this.userService = new UserService();
    this.state = {
      user: moked_data.user,
      tweets: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (tweet) => {
    const { tweets } = this.state;
    const twit = { username: "", content: tweet, picture: "" }

    tweets.unshift(twit);
    this.setState({ tweets })
  }

  sendTweet = (post) => {
    const { user, tweets } = this.state;
    const { content, picture } = post;

    const newPost = {
      userId: user.id,
      content,
      picture,
    };
    this.postService.postOne(newPost)
      .then(insertedPost => {
        tweets.unshift(insertedPost);
        this.setState({ tweets });
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  componentDidMount() {
    const userPromise = this.userService.getOne("1");
    const tweetsPromise = this.postService.getAll();


    Promise.all([userPromise, tweetsPromise])
      .then((params) => {
        const [user, tweets] = params;
        this.setState({ user, tweets })
      })
      .catch(err => console.log(err.message))
  }

  render() {
    console.log(this.state);
    const { user, tweets } = this.state;

    const MappedTweets = tweets.map(e => {
      const user = moked_data.user;
      return (
        <Tweet
          tweet=""
          name=""
          username=""
          key={e.id + Math.random}
          {...e}
          onLike={() => console.log("funcion de like")}
        />)
    });

    return (
      <div>
        <NavBar {...user} />
        <div className="grid">
          <div className="userCard1">
            <UserCard {...user} />
          </div>

          <div className="feed">
            <div className="addTweet">
              <TweetInput AddTasks={this.handleSubmit} />
            </div>
            <div className="tweets">
              {MappedTweets}
              <Tweet
                content="Que mal que huele la linea 6 de metro" />
            </div>

          </div>
        </div>
      </div >
    )
  }
}

export default withRouter(Feed);

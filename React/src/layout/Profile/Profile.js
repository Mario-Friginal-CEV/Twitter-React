import React, { Component } from 'react';
import { withRouter } from "react-router";
import { UserService } from '../../services/UserService';
import NavBar from '../../components/NavBar';
import UserProfile from '../../components/UserProfile';
import '../../styles/profile.css';
import * as moked_data from '../../mocked_data';
import UserData from '../../components/UserData';
import Tweet from '../../components/Tweet';
import ProfileActivity from '../../components/ProfileActivity';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      user: moked_data.user
    }
  }



  componentDidMount() {
    const { id } = this.props.match.params;
    const user = this.userService.getOne(id);
    this.setState({
      id: user.id,
      name: user.name,
      description: user.description,
      location: user.location,
      webpage: user.webpage,
      picture: user.picture,
    })
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <NavBar {...user} />
        <div className="userProfile1">
          <UserProfile {...user} />
        </div>
        <div className="parte">
          <div className="parte1">
            <UserData {...user} />
          </div>
          <div className="tweets">
            <ProfileActivity />
            <Tweet
              content="me" />
            <Tweet
              content="dejaste" />
            <Tweet
              content="en" />
            <Tweet
              content="visto" />
            <Tweet
              content=":´(" />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile);

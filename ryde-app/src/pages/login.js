import React, { Component } from "react";

import UserList from "../components/UserList";
import {getUsers} from "../actions/userActions";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadComplete: 0,
      users: [],
    };
  }

  componentDidMount() {
    getUsers((data) => {
      this.setState({
        users: data,
        loadComplete: this.state.loadComplete + 1,
      });
    });
  }
  render() {
    return (
      <>
        {this.state.loadComplete == 1 && (
          <UserList content={this.state.users} />
        )}
      </>
    );
  }
}

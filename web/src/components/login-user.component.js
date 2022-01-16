import React, { Component } from "react";
import UserDataService from "../services/user.service";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onchangeEmail = this.onchangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.login = this.login.bind(this);
    this.newLogin = this.newLogin.bind(this);

    this.state = {
      email: null,
      password: null
    };
  }

  onchangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }


  login() {
    let data = {
      email: this.state.email,
      password: this.state.password,
    };

    UserDataService.login(data)
      .then(response => {
        this.setState({
          email: response.data.email,
          password: response.data.password,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newLogin() {
    this.setState({
      email: null,
      password: null,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newLogin}>
              Login
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Email</label>
              <input
                  type="text"
                  className="form-control"
                  id="regEmail"
                  required
                  value={this.state.regEmail}
                  onChange={this.onchangeEmail}
                  name="regEmail"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Password</label>
              <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  name="password"
              />
            </div>


            <button onClick={this.login} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

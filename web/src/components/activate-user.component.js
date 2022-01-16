import React, { Component } from "react";
import UserDataService from "../services/user.service";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onchangeEmail = this.onchangeEmail.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.saveActivation = this.saveActivation.bind(this);
    this.newActivation = this.newActivation.bind(this);

    this.state = {
      email: null,
      code: null
    };
  }

  onchangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeCode(e) {
    this.setState({
      code: e.target.value,
    });
  }


  saveActivation() {
    let data = {
      email: this.state.email,
      code: this.state.code,
    };

    UserDataService.activate(data)
      .then(response => {
        this.setState({
          email: response.data.email,
          code: response.data.code,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newActivation() {
    this.setState({
      email: null,
      code: null,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newActivation}>
              Activcate
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
              <label htmlFor="title">Code</label>
              <input
                  type="text"
                  className="form-control"
                  id="code"
                  required
                  value={this.state.code}
                  onChange={this.onChangeCode}
                  name="code"
              />
            </div>


            <button onClick={this.saveActivation} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

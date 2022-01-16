import React, { Component } from "react";
import UserDataService from "../services/user.service";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onchangeEmail = this.onchangeEmail.bind(this);
    this.onChangeOrg = this.onChangeOrg.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeConfirmPass = this.onChangeConfirmPass.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      regFirst: null,
      regLast: null,
      regOrg: null,
      regEmail: null,
      regPass: null,
      regConfirmPass: null,
      regAddress: null,
      regPhoneNumber: null
    };
  }

  onChangeFirstName(e) {
    this.setState({
      regFirst: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      regLast: e.target.value,
    });
  }

  onchangeEmail(e) {
    this.setState({
      regEmail: e.target.value
    });
  }

  onChangeOrg(e) {
    this.setState({
      regOrg: e.target.value
    });
  }

  onChangePass(e) {
    this.setState({
      regPass: e.target.value
    });
  }

  onChangeConfirmPass(e) {
    this.setState({
      regConfirmPass: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      regAddress: e.target.value
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      regPhoneNumber: e.target.value
    });
  }

  saveUser() {
    let data = {
      regFirst: this.state.regFirst,
      regLast: this.state.regLast,
      regOrg: this.state.regOrg,
      regEmail: this.state.regEmail,
      regPass: this.state.regPass,
      regConfirmPass: this.state.regConfirmPass,
      regAddress: this.state.regAddress,
      regPhoneNumber: this.state.regPhoneNumber
    };

    UserDataService.register(data)
      .then(response => {
        this.setState({
          regFirst: response.data.regFirst,
          regLast: response.data.regLast,
          regOrg: response.data.regOrg,
          regEmail: response.data.regEmail,
          regPass: response.data.regPass,
          regConfirmPass: response.data.regConfirmPass,
          regAddress: response.data.regAddress,
          regPhoneNumber: response.data.regPhoneNumber,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
      regFirst: null,
      regLast: null,
      regOrg: null,
      regEmail: null,
      regPass: null,
      regConfirmPass: null,
      regAddress: null,
      regPhoneNumber: null,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newUser}>
              Register
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">First Name</label>
              <input
                type="text"
                className="form-control"
                id="regFirst"
                required
                value={this.state.regFirst}
                onChange={this.onChangeFirstName}
                name="regFirst"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Last Name</label>
              <input
                  type="text"
                  className="form-control"
                  id="regLast"
                  required
                  value={this.state.regLast}
                  onChange={this.onChangeLastName}
                  name="regLast"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Organization</label>
              <input
                  type="text"
                  className="form-control"
                  id="regOrg"
                  required
                  value={this.state.regOrg}
                  onChange={this.onChangeOrg}
                  name="regOrg"
              />
            </div>

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
                  id="regPass"
                  required
                  value={this.state.regPass}
                  onChange={this.onChangePass}
                  name="regPass"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Confirm Password</label>
              <input
                  type="password"
                  className="form-control"
                  id="regConfirmPass"
                  required
                  value={this.state.regConfirmPass}
                  onChange={this.onChangeConfirmPass}
                  name="regConfirmPass"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Address</label>
              <input
                  type="text"
                  className="form-control"
                  id="regAddress"
                  required
                  value={this.state.regAddress}
                  onChange={this.onChangeAddress}
                  name="regAddress"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Phone Number</label>
              <input
                  type="text"
                  className="form-control"
                  id="regPhoneNumber"
                  required
                  value={this.state.regPhoneNumber}
                  onChange={this.onChangePhoneNumber}
                  name="regPhoneNumber"
              />
            </div>

            <button onClick={this.saveUser} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

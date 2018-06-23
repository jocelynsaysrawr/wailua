import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import { authenticate } from "../actions/index";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    try {
      const newUser = await Auth.signUp({
        username: this.state.email,
        password: this.state.password,
        attributes: {
          name: this.state.name
        }
      });
      this.setState({
        newUser
      });
    } catch (e) {
      alert(e.message);
    }
  };

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
      await Auth.signIn(this.state.email, this.state.password);

      this.props.authenticate(true);
      this.props.history.push("/game");
    } catch (e) {
      alert(e.message);
    }
  };

  onChange = (key, value) => {
    this.setState({ [key]: value });
  };

  renderConfirmationForm() {
    return (
      <div>
        <h3>Confirmation Code</h3>
        <form onSubmit={this.handleConfirmationSubmit}>
          <div className="form-group relative">
            <label>
              <input
                onChange={this.handleChange}
                name="confirmationCode"
                value={this.state.confirmationCode}
                type="tel"
                placeholder="Confirmation Code"
                className="form-control input-lg signup-confirmation"
              />{" "}
              <i className="fa fa-lock" />
              <div className="form-group">
                <button
                  disabled={!this.validateForm()}
                  className="btn btn-success btn-lg btn-block"
                  type="submit"
                >
                  Confirm
                </button>
              </div>
            </label>
          </div>
        </form>
      </div>
    );
  }

  renderForm() {
    return (
      <div className="signup-container-wrapper clearfix">
        <ul className="switcher clearfix">
          <li className="first logo active">
            <a>Sign Up</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="signup">
            <form
              onSubmit={this.handleSubmit}
              className="form-horizontal signup-form"
            >
              <div className="form-group relative">
                <input
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                  type="text"
                  placeholder="First Name"
                  required=""
                  className="form-control input-lg login-username"
                />{" "}
                <i className="fa fa-lock" />
              </div>
              <div className="form-group relative">
                <input
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                  type="email"
                  placeholder="E-mail Address"
                  required=""
                  className="form-control input-lg login-username"
                />{" "}
                <i className="fa fa-lock" />
              </div>
              <div className="form-group relative">
                <input
                  onChange={this.handleChange}
                  name="password"
                  value={this.state.password}
                  type="password"
                  placeholder="Password"
                  required=""
                  className="form-control input-lg login-password"
                />{" "}
                <i className="fa fa-lock" />
              </div>
              <div className="form-group relative">
                <input
                  onChange={this.handleChange}
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  type="password"
                  placeholder="Confirm Password"
                  required=""
                  className="form-control input-lg login-password"
                />{" "}
                <i className="fa fa-lock" />
              </div>
              <div className="form-group">
                <button
                  disabled={!this.validateForm()}
                  className="btn btn-success btn-lg btn-block"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <hr />
              <div className="text-center">
                <label>
                  <a href="#login">Already a member?</a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}

export default connect(
  null,
  { authenticate }
)(SignUp);

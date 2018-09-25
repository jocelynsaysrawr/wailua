import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import { authenticate } from "../actions/index";
import "../style/sign_up.scss";

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
      <div className="wrapper-confirmation animated bounce">
        <h2>Confirmation Code</h2>
        <form onSubmit={this.handleConfirmationSubmit}>
          <label id="icon" htmlFor="email">
            <i className="fa fa-user"> </i>
          </label>
          <input
            onChange={this.handleChange}
            name="confirmationCode"
            value={this.state.confirmationCode}
            type="tel"
            placeholder="Confirmation Code"
            className="form-control input-lg signup-confirmation"
          />
          <button
            disabled={!this.validateForm()}
            className="btn btn-success btn-lg btn-block"
            type="submit"
          >
            Confirm
          </button>
        </form>
      </div>
    );
  }

  renderForm() {
    return (
      <div className="wrapper animated bounce">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <label id="icon" htmlFor="name">
            <i className="fa fa-user">{""}</i>
          </label>
          <input
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            type="text"
            placeholder="First Name"
            required=""
            className="form-control input-lg login-username"
          />

          <label id="icon" htmlFor="email">
            <i className="fa fa-envelope">{""}</i>
          </label>
          <input
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            type="email"
            placeholder="E-mail Address"
            required=""
            className="form-control input-lg login-username"
          />
          <label id="icon" htmlFor="password">
            <i className="fa fa-key"> </i>
          </label>
          <input
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            type="password"
            placeholder="Password"
            required=""
            className="form-control input-lg login-password"
          />
          <label id="icon" htmlFor="password">
            <i className="fa fa-exclamation"> </i>
          </label>
          <input
            onChange={this.handleChange}
            name="confirmPassword"
            value={this.state.confirmPassword}
            type="password"
            placeholder="Confirm Password"
            required=""
            className="form-control input-lg login-password"
          />

          <button
            disabled={!this.validateForm()}
            className="btn btn-success btn-lg btn-block"
            type="submit"
          >
            Sign Up
          </button>

          <hr />
          <div className="crtacc signup">
            <a className="signup" href="/login">
              Already a member?
            </a>
          </div>
        </form>
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

import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import { authenticate } from "../actions/index";
import "../style/login.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.props.authenticate(true);
      this.props.history.push("/game");
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    return (
      <div className="wrapper animated bounce">
        <h1>Login</h1>
        <hr />

        <form onSubmit={this.handleSubmit}>
          <label id="icon" htmlFor="email">
            <i className="fa fa-user"> </i>
          </label>
          <input
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            type="email"
            placeholder="E-mail Address"
            required=""
            id="username"
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
            id="password"
          />

          <button
            disabled={!this.validateForm()}
            className="btn btn-success btn-lg btn-block"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  };
};

export default connect(
  mapStateToProps,
  { authenticate }
)(Login);

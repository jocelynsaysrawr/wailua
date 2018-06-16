import React, { Component } from "react";
import { Auth } from "aws-amplify";

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = (key, value) => {
    this.setState({ [key]: value });
  };

  singUp = () => {
    const { email, password } = this.state;
    Auth.signUp({
      username: email,
      password
    });
  };
  render() {
    return (
      <div className="signup-container-wrapper clearfix">
        <ul className="switcher clearfix">
          <li className="first logo active">
            <a>Sign Up</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="signup">
            <form className="form-horizontal signup-form">
              <div className="form-group relative">
                <input
                  type="email"
                  className="form-control input-lg login-username"
                  placeholder="E-mail Address"
                  required=""
                />{" "}
                <i className="fa fa-lock" />
              </div>
              <div className="form-group relative">
                <input
                  type="password"
                  placeholder="Password"
                  required=""
                  className="form-control input-lg login-password"
                />{" "}
                <i className="fa fa-lock" />
              </div>
              <div className="form-group relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required=""
                  className="form-control input-lg login-password"
                />{" "}
                <i className="fa fa-lock" />
              </div>
              <div className="form-group">
                <button
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
}

export default SignUp;

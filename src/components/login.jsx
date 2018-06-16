import React, { Component } from "react";
import { Auth } from "aws-amplify";

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
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    return (
      <div className="login-container-wrapper clearfix">
        <ul className="switcher clearfix">
          <li className="first logo active">
            <a>Login</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="login">
            <form
              onSubmit={this.handleSubmit}
              className="form-horizontal login-form"
            >
              <label>
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
                <div className="form-group">
                  <button
                    disabled={!this.validateForm()}
                    className="btn btn-success btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

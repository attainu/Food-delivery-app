import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import '../App.css'
import './Login.css'
import Navbar from '../components/Navbar';

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
};

class LoginPage extends Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";

    // email error
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (!this.state.email) {
      emailError = "name cannot be blank";
    }

    // password error
    if (this.state.password.length < 8) {
      passwordError = "password is small";
    }
    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
      alert('Welcome to Foodifly')
      window.location.replace('/')

    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="login">
         

          <div className="login__container">
            <img height="250px" src="https://edfone.com/themes/edbox/images/sl-avatar.svg" alt="" />
            <h1>User Login</h1>

            <form onSubmit={this.handleSubmit}>
              <h5>E-mail</h5>
              <div>
                <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.emailError}
                </div>
              </div>

              <h5>Password</h5>
              <div>
                <input type="password" name="password" placeholder="Enter password" value={this.state.password}
                  onChange={this.handleChange} />
                <div style={{ fontSize: 13, color: "red" }}>
                  {this.state.passwordError}
                </div>
              </div>

              <button type="submit" className="login__signInButton">SIGN IN</button>

            </form>
          </div>
        </div>
      </>
    )
  }
}

export default LoginPage;
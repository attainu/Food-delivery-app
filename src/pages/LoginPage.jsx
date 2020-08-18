import React, { Component } from 'react';
import '../App.css'
import './Login.css'
import Navbar from '../components/Navbar';


class LoginPage extends Component {



  render() {
    return (
      <>
        <Navbar />
        <div className="login">
          <h3>LoginPage</h3>

          <div className="login__container">
            <img height="250px" src="https://edfone.com/themes/edbox/images/sl-avatar.svg" alt="" />
            <h1>User Login</h1>

            <form>
              <h5>E-mail</h5>
              <input type="email" name="email" placeholder="Enter email" />

              <h5>Password</h5>
              <input type="password" name="password" placeholder="Enter password" />

              <button type="submit" className="login__signInButton">SIGN IN</button>
            </form>
            <br />
            <button className="login__registerButton" >SIGN UP</button>
          </div>
        </div>
      </>
    )
  }
}

export default LoginPage;
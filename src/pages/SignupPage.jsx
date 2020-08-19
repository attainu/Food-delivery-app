import React, { Component } from 'react';
import '../App.css'
import './Signup.css'
import Navbar from '../components/Navbar';

const initialState = {
  name: "",
  email: "",
  password: "", 
  nameError: "",
  emailError: "",
  passwordError: ""
};

class SignupPage extends Component {
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
    let nameError = "";    
    let emailError = "";
    let passwordError = "";

    // name error
    if(!this.state.name === String) {
      nameError = "not a valid name"
    }
    if (!this.state.name) {
      nameError = "name cannot be blank";
    }
    // email error
    if (!this.state.email) {
      emailError = "email cannot be blank";
    }
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    // password error
    if(this.state.password.length < 8){
      passwordError = "password is small";
    }
    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (nameError || emailError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
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
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="signup">
          <h3>Signup-Page</h3>

          <div className="signup__container">
            <img height="250px" src="https://edfone.com/themes/edbox/images/sl-avatar.svg" alt="" />
            <h1>User Signup</h1>

            <form onSubmit={this.handleSubmit}>
            <h5>Name</h5>
              <div>
                  <input type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} />
                  <div style={{ fontSize: 12, color: "white" }}>
                    {this.state.nameError}
                  </div>
              </div>

              <h5>E-mail</h5>
              <div>
                  <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                  <div style={{ fontSize: 12, color: "white" }}>
                    {this.state.emailError}
                  </div>
              </div>

              <h5>Password</h5>
              <div>
                  <input type="password" name="password" placeholder="Enter password" value={this.state.password}
                  onChange={this.handleChange}/>
                  <div style={{ fontSize: 12, color: "white" }}>
                    {this.state.passwordError}
                  </div>
              </div>
              
              <button type="submit" className="signup__registerButton">SIGN UP</button>

            </form>            
          </div>
        </div>
      </>
    )
  }
}

export default SignupPage;

// issues
// improvements
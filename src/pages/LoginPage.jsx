import React, { Component } from 'react';
import '../App.css'
import './Login.css'
import Navbar from '../components/Navbar';
import fire from '../config/fire'

const initialState = {  
  email:"",
  password:"",
  emailError:"",
  passwordError:""
}

class LoginPage extends Component {
    
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = initialState;
      }

      login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
          });
      }
    
      signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
          })
      }
    
      handleChange(e){
        const isCheckbox = e.target.type === "checkbox";
        this.setState({ [e.target.name]: isCheckbox
          ? e.target.checked
          :e.target.value 
        });
      };

      validate = () => {
        let emailError = "";
        let passwordError = "";
        // email errors
        if (!this.state.email) {
          emailError = 'email cannot be blank';
        }
        if (!this.state.email.includes('@')) {
          emailError = 'invalid email';
        }        

        // password errors
        if(!this.state.password) {
          passwordError = 'password is needed'
        }
        if(this.state.password.length < 8){
          emailError = 'password is small';
        }
        // error message
        if (emailError || passwordError) {
          this.setState({ emailError, passwordError });
          return false;
        }

        return true;
      }

      handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(initialState);
        }
      };

    render() {
        return (
            <>
              <Navbar />
              <div className="login">
                <h3>LoginPage</h3>
    
                <div className="login__container">
                <img height="250px" src="https://edfone.com/themes/edbox/images/sl-avatar.svg" alt=""/> 
                    <h1>User Login</h1>
           
                    <form>
                        <div>
                          <h5>E-mail</h5>
                          <input value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Enter email" />
                        </div>
                        <div style={{ fontSize: 12, color: "red"}}>
                          {this.state.emailError}
                        </div>

                        <div>
                          <h5>Password</h5>
                          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Enter password" />
                        </div>
                        <div style={{ fontSize: 12, color: "red"}}>
                          {this.state.passwordError}
                        </div>

                        <button type="submit" className="login__signInButton" onClick={this.login}>SIGN IN</button>                                    
                    </form>
                    <br/>

                    <button className="login__registerButton" onClick={this.signup}>SIGN UP</button>
                </div>        
              </div>                    
           </>
        )
    }
}

export default LoginPage;
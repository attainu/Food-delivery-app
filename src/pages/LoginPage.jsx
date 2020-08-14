import React, { Component } from 'react';
import '../App.css'
import './Login.css'
import Navbar from '../components/Navbar';
import fire from '../config/fire'

class LoginPage extends Component {
    
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email:'',
          password:''
        }
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
        this.setState({ [e.target.name]: e.target.value });
      }

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
                        <h5>E-mail</h5>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Enter email" />

                        <h5>Password</h5>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Enter password" />

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
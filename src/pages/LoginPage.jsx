import React, { useState } from 'react';
import '../App.css'
import './Login.css'
import Navbar from '../components/Navbar';
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import loginImg from "../undraw_hey_email_liaa.svg"
//import { Navbar } from 'reactstrap';

function LoginPage() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();//this stops refresh
        //do the login logic...

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to homepage...
                history.push("/");
            })
    }

    const register = (event) => {
        event.preventDefault();//this stops refresh!!!
        // do the register logic

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //created a user and logged in, redirect to home page
                history.push("/")
            })
            .catch((e) => alert(e.message));
    }

    return (<>
        <Navbar />
        <div className="login">


            <div className="login__container">
                <img height="250px" src="https://edfone.com/themes/edbox/images/sl-avatar.svg" alt="" />
                <h1>User Login</h1>

                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <br />
                <button onClick={register} className="login__registerButton">Don't have an account?sign up here</button>
            </div>
        </div>
    </>
    )
}
export default LoginPage;
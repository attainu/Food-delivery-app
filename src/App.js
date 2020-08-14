import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/footer";
import Search from "./components/Search";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
// login:
import LoginPage from "./pages/LoginPage";
import fire from "./config/fire";
import "./App.css";
import Logout from "./components/logout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* {this.state.user ? (<Logout />) : (<LoginPage />)}              */}
            <Route path="/login" component={LoginPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

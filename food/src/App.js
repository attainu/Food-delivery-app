import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import HomePage from "./pages/HomePage";

// login:
import LoginPage from "./pages/LoginPage";

import "./App.css";
import Menupage from "./pages/Menupage";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }




  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* {this.state.user ? (<Logout />) : (<LoginPage />)}              */}
            <Route path="/login" component={LoginPage} />
            <Route path="/cart" component={HomePage} />
            <Route path="/menu" component={Menupage} />
            <Route path="/restaurants">The menu</Route>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/footer';
import Search from './components/Search';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
// login:
import LoginPage from './pages/LoginPage';
import fire from './config/fire'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }
  
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }else{
        this.setState({ user: null });
      }
    });
  }

  render(){
    return (
      <div className="App">                        
        <Router>
          <Switch>
            {/* {this.state.user ? (<HomePage />) : (<LoginPage />)} */}
            <Route exact path="/login" exact component={LoginPage} />
            <Route exact path="/profile" exact component={ProfilePage} />
            <Route path="/" component={HomePage} />          
            {/* <Redirect to="/" /> */}
            {/* // <Route exact path='/search/:searchQuery' component={SearchResultPage} />*/}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

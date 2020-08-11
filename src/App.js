import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/footer';
import Search from './components/Search';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
// login:
import LoginPage from './pages/LoginPage';
// import { useStateValue } from "./StateProvider"
import { auth } from "./firebase"
//import SearchResultPage from './pages/SearchResultPage';
import './App.css';
import { Login } from "./components/login/index"

function App() {
  // const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {

      } else {

      }
    })
  }, [])

  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/login" exact component={LoginPage} />
          <Route exact path="/profile" exact component={ProfilePage} />
          <Route path="/" component={HomePage} />
         
          {/* <Redirect to="/" /> */}
          {/* // <Route exact path='/search/:searchQuery' component={SearchResultPage} />*/}
        </Switch>
      </Router>

      {/* <Login /> */}
    </div>
  );
}

export default App;

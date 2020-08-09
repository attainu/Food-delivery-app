import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/footer';
import Search from './components/Search';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
//import SearchResultPage from './pages/SearchResultPage';
import './App.css';
import { Login } from "./components/login/index"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />

        {/* // <Route exact path='/search/:searchQuery' component={SearchResultPage} />*/}
        <Redirect to="/" />
      </Switch>
      <Search />
      <Footer />
      {/* <Login /> */}
    </div>
  );
}

export default App;

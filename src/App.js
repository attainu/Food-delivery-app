import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section from './components/Section';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;

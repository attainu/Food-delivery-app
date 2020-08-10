import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/footer';
import Search from './components/Search';
import HomePage from './pages/HomePage';
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

      }else{

      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />          
          <Route path="/login" component={LoginPage}/>
          {/* <Redirect to="/" /> */}
          {/* // <Route exact path='/search/:searchQuery' component={SearchResultPage} />*/}    
        </Switch>
      </Router>      
      <Section />     
      <Search />
      <Footer />
      {/* <Login /> */}
    </div>
  );
}

export default App;

import React, { Component } from "react";


import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/footer';
import Search from '../components/Search';


import '../App.css';

class Logout extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }



  render() {
    return (
      <div>
        <Navbar />
        <button className="logoutButton" onClick={this.logout} >LOGOUT</button>
        <Section />
        <Search />
        <Footer />
      </div>
    )
  }
}

export default Logout;
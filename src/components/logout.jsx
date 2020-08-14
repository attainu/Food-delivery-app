import React, { Component } from "react";
import fire from "../config/fire";
import { NavLink, Link } from "react-router-dom";

import { Redirect } from 'react-router-dom';
import Home from '../pages/Menusearch';
import Recipes from '../pages/Recipes';
import RecipeDetail from '../pages/RecipeDetail';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/footer';
import Search from '../components/Search';
import Menusearch from '../pages/Menusearch';

import '../App.css';

class Logout extends Component{

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <Navbar />
        <button className="logoutButton" onClick={this.logout}>LOGOUT</button>        
        <Section />
        <Search />        
        <Footer />
      </div>
    )
  }
}

export default Logout;
import React, { Component } from 'react';
import fire from "../config/fire"

import { Redirect } from 'react-router-dom';
import Home from './Menusearch';
import Recipes from './Recipes';
import RecipeDetail from './RecipeDetail';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/footer';
import Search from '../components/Search';
import Menusearch from './Menusearch';

// const HomePage = ({ user }) => {
class HomePage extends Component{
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
      }
    
      logout() {
        fire.auth().signOut();
      }

    render() {
        // return user ? <Redirect to="/" /> : 
        return (
            <div>
                <Navbar />
                <button onClick={this.logout}>Logout</button>
                <Section />
                <Search />        
                <Footer />
            </div>
        )
    }
};

export default HomePage;
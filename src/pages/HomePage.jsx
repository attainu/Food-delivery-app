import React, { Component } from 'react';

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

class HomePage extends Component{
    render() {
        return (
            <div>
                <Navbar />
                <Section />
                <Search />        
                <Footer />
            </div>
        )
    }
};

export default HomePage;
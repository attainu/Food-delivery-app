import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Home from './Menusearch';
import Recipes from './Recipes';
import RecipeDetail from './RecipeDetail';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/footer';
import Menusearch from './Menusearch';
import Restaurant from './../Restaurant';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Section />
                <Restaurant />
                <Footer />
            </div>
        )
    }
};

export default HomePage;
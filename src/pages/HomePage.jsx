import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/footer';
import Search from '../components/Search';
import Restaurant from './../Restaurant';
class HomePage extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Section />
                <Restaurant />
                <Search />
                <Footer />
            </div>
        )
    }
};

export default HomePage;
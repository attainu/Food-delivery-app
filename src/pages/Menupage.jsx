import React, { Component } from 'react'
import SearchMenu from '../componentsMenu/SearchMenu';
import Navbar from '../components/Navbar';

class Menupage extends Component {
    render() {
        return (
            <div id="menu">
                <Navbar />
                <h2 style={{ "color": '#e67e22', 'textAlign': 'center' }}>Order From Your Favourite Restaurant</h2>
                <h5 style={{ "color": '#e67e22', 'textAlign': 'center' }}>Here is the Menu, type your desired food items</h5>
                <SearchMenu />

            </div>
        )
    }
}
export default Menupage;

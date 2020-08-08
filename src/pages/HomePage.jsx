import React from 'react';
import {Redirect} from 'react-router-dom';
const HomePage=({user})=>{
    return !user ? <Redirect to ="/login" /> : <div> HomePage</div>;
};
export default HomePage;
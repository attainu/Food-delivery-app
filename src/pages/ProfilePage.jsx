import React from 'react'
import Menusearch from './Menusearch';
import Navbar from '../components/Navbar'
import Recipes from './Recipes';
import RecipeDetail from './RecipeDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { Navbar } from 'reactstrap';

export default function ProfilePage() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                {/*pass props of Route to my Recipes */}
                <Route exact path='/recipes/:query' exact render={(props) => <Recipes {...props} />}></Route>
                <Route path='/recipe/:rId' exact render={(props) => <RecipeDetail {...props} />}></Route>
                <Menusearch />
            </Switch>
        </BrowserRouter>
    )
}

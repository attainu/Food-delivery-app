import React, { Component } from 'react';
import RecipeCard from './components/RecipeCard';
import axios from 'axios';

class Recipes extends Component {
    state = {
        recipes: []
    }
    componentDidMount() {
       
        let query = this.props.match.params.query;
        axios.get(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
            .then(response => {
                this.setState({ recipes: response.data.recipes });
            })
    }
    render() {
        return (
            <section style={{ width: '80%', margin: '1rem auto' }}>
                {this.state.recipes.map(recipe => {
                    return <RecipeCard recipe={recipe} key={recipe.recipe_id} />
                })}
            </section>
        )
    }
}

export default Recipes;
import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class RecipeDetail extends Component {
    state = {
        recipe: {}
    }

    componentDidMount() {
        let rId = this.props.match.params.rId;
        axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${rId}`)
            .then(response => {
                this.setState({ recipe: response.data.recipe })
            })
    }

    render() {
        let { title, image_url, ingredients, recipe_id } = this.state.recipe;

        return (
            <section style={{ width: '80%', margin: 'auto' }}>
                <img src={image_url} alt={title} />
                <h3>{title}</h3>
                <h2>Now only for Rs.{recipe_id / 100}</h2>
                <Button onClick={function handleClick(e) {
                    e.preventDefault();
                    alert(`${title}` + ' - Ordered successfully')
                }}>Order Now</Button>
            </section>
        )
    }
}

export default RecipeDetail;
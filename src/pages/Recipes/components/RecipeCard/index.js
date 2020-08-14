import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class RecipeCard extends Component {
        
    state = {
        redirect: false
    }

    redirect(rId) {
        if (this.state.redirect) {
            let path = `/recipe/${rId}`;
            return <Redirect push to={path} />
        }
    }

    favouriteIt() {
        this.props.dispatch({ type: 'ADD_TO_FAVORITES', payload: this.props.recipe })
    }

    removeFromFavour() {
        this.props.dispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: this.props.recipe.recipe_id });
    }
    
    render() {
        let { recipe_id, title, image_url } = this.props.recipe;
        return (
            <Card style={{
                width: '24%', display: 'inline-block',
                verticalAlign: 'top', height: '340px', margin: '0.5%'
            }}>
                {this.redirect(recipe_id)}
                <Card.Img variant="top" src={image_url} style={{ maxHeight: '160px' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div style={{ "fontWeight": "600", "color": "green" }}> Only For Rs. {(recipe_id / 100)}</div>
                    <Button variant="info" onClick={() => this.setState({ redirect: true })}
                    >Check Restaurant</Button>

                    {this.props.favours.findIndex(rec => rec.recipe_id === recipe_id) === -1 ?
                        <Button variant="success"
                            onClick={() => this.favouriteIt()}
                        >Add to cart</Button> :
                        <Button variant="danger"
                            onClick={() => this.removeFromFavour()}
                        >Remove from cart</Button>
                    }

                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favours: state.favouriteRecipes
    }
}

export default connect(mapStateToProps)(RecipeCard);
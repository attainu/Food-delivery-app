import React, { Component } from 'react';
import RestCard from '../RestCard';
import { connect } from 'react-redux';


class Restaurants extends Component {

    render() {
        console.log(this.props.restaurants)
        return (
            <section style={{ width: '80%', margin: '1rem auto' }}>
                {this.props.restaurants.map(rest => {
                    console.log(rest.restaurant)
                    return <RestCard rest={rest.restaurant} />
                })}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps)(Restaurants);
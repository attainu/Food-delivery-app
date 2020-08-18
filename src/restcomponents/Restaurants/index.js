import React, { Component } from 'react';
import RestCard from '../RestCard';
import { connect } from 'react-redux';


class Restaurants extends Component {

    render() {

        return (<>
            {!this.props.restaurants ? (<h2>Loading...</h2>) : (<section style={{ width: '80%', margin: '1rem auto' }}> <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center", "paddingBottom": "2%" }}>

                {this.props.restaurants.map(rest => {

                    return <RestCard rest={rest.restaurant} key={rest.restaurant.R.res_id} />
                })} </div>

            </section>)}
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps)(Restaurants);
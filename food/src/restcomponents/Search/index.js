import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRestaurantsOnSearch } from './../../redux/actions/index';
import { Form, Button, FormControl } from 'react-bootstrap';

class Search extends Component {
    state = {
        query: 'india'
    }
    render() {
        return (
            <section className='citySearch' style={{ marginLeft: '12%' }}><h3>Search any city to find nearby Restaurants and enjoy delicious food at your home.</h3>
                <Form inline>
                    <img src="https://image.flaticon.com/icons/svg/684/684850.svg" alt="location" style={{ "height": "35px", 'marginLeft': '-30px' }} />
                    <FormControl type="text" placeholder="Search any city" className="mr-sm-2 w-75"
                        onChange={(e) => this.setState({ query: e.target.value })} />
                    <Link to='/restaurants:search'> <Button variant="outline-success" style={{ width: '10rem' }} onClick={() => this.props.setRestaurantsOnquery(this.state.query)}>Search</Button></Link>
                </Form>
                <div className="subline" style={{ "fontWeight": "800", "fontSize": "20px", "color": "black", "paddingTop": "10px", "marginLeft": "28%" }}>Order from your favourite Eatery-</div>

            </section>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setRestaurantsOnquery: (query) => dispatch(setRestaurantsOnSearch(query))
    }
}

export default connect(null, mapDispatchToProps)(Search);
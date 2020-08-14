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
            <section className='citySearch' style={{ marginLeft: '7%' }}><h3>Search any city to find nearby Restaurants and enjoy delicious food at your house.</h3>
                <div className="subline" style={{ "fontWeight": "800", "fontSize": "20px", "color": "black", "paddingTop": "10px", "margin-left": "32%" }}>Order from your favourite Eatery-</div>
                <Form inline>
                    <img src="https://image.flaticon.com/icons/svg/684/684850.svg" alt="location" style={{ "height": "35px" }} />
                    <FormControl type="text" placeholder="Search any city" className="mr-sm-2 w-75"
                        onChange={(e) => this.setState({ query: e.target.value })} />
                    <Link to="/profile"> <Button variant="outline-success" onClick={() => this.setState({ redirect: true })} onClick={() => this.props.setRestaurantsOnquery(this.state.query)}>Search</Button></Link>
                </Form>
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
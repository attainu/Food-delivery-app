import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Search extends Component {
    state = {
        searchQuery: ""
    };
    handleChange = event => {
        this.setState({ searchQuery: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.history.push(`/search/${this.state.searchQuery}`);
    };
    render() {
        return (
            <><div className="card mb-3" style={{ "width": '100%' }}>
                <img className="card-img-top" style={{ "width": '100%', "height": '30rem' }} src="https://s3.amazonaws.com/thumbnails.venngage.com/template/9efa693f-2f7b-4d70-b060-8ba87f5354e3.png" alt="cardimagecap" />
            </div>

            </>
        );
    }
}
export default withRouter(Search);
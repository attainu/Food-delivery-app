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
            <>
                <form className="input-group mb-3" onSubmit={this.handleSubmit} style={{ margin: "10px auto", width: "60%" }}>
                    <img src="https://image.flaticon.com/icons/svg/684/684850.svg" alt="location" style={{ "height": "35px" }} />
                    <input type="text" className="form-control" placeholder="Sonico Shopping Centre, Dr D N Rd, Fort" aria-label="enter location" aria-describedby="button-addon2" name="searchQuery" onChange={this.handleChange} value={this.state.searchQuery} style={{ "border": "none", "boxShadow": "0px 2px #888888" }} />

                    <div className="input-group-append">
                        <input className="btn btn-success" type="submit" id="button-addon2" value="Search" style={{ "paddingBottom": "5px", "margin-left": "5px" }} />

                    </div>

                </form>
                <div className="subline" style={{ "fontWeight": "800", "fontSize": "20px", "color": "black", "paddingTop": "20px", "margin-left": "7%" }}>Order from your favourite Eatery-</div>
                <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center", "paddingBottom": "2%" }}>
                    <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
                        <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Downtown restaurant</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Order Online</a>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
                        <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Downtown restaurant</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Order Online</a>
                        </div>
                    </div>

                    <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
                        <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Downtown restaurant</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Order Online</a>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
                        <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Downtown restaurant</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Order Online</a>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
                        <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Downtown restaurant</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Order Online</a>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
                        <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Downtown restaurant</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Order Online</a>
                        </div></div>
                </div>
            </>
        );
    }
}
export default withRouter(Search);
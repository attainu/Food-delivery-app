import React from 'react';
import config from "../config";
import { NavLink, Link } from "react-router-dom";
import '../App.css';
const MtubeNavbar = props => {
    const handleLogoutFailure = err => {
        console.log(err);
    };
    const handleLogoutSuccess = res => {
        console.log(res);
    }

    const logstyle = {
        color: "white"
    }

    return (<>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">

            <h2 class="material-icons" style={{ "fontSize": "45px", "textDecoration": "none", "marginLeft": "4%", "marginRight": "1%", "paddingTop": "0.5rem" }}>emoji_food_beverage
            </h2>

            <Link class="navbar-brand" className="react" to="/" style={{ "fontSize": "45px", "fontWeight": "600", "marginRight": "40%", "textDecoration": "none" }}> Foodify</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                <a href="#" style={{ "color": "white", "marginLeft": "1rem" }} > Hello, Gigib Hadid </a>
                <a href="#" style={{ "color": "white", "marginLeft": "1rem" }} > Orders </a>
        {/* cart */}
                <a href="#" style={{ "color": "white", "marginLeft": "1rem" }} > Cart </a>

            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav" style={{ "color": "white" }}>

                    <NavLink class="nav-item nav-link active pro" href="#" className="pro" to="/profile" style={{ "color": "white", "fontSize": "30px", "fontWeight": "400", "listStyle": "none" }}>Menu<span class="sr-only">(current)</span></NavLink >
                {/*orders  */}
                    <NavLink class="nav-item nav-link pro" href="#" className="pro" to="/orders" style={{ "color": "white", "fontSize": "30px", "fontWeight": "400", "listStyle": "none" }}>Orders</NavLink>
                {/* cart */}
                    <NavLink class="nav-item nav-link pro" href="#" className="pro carts" to="/Cart" style={{ "color": "white", "fontSize": "30px", "fontWeight": "400",      "listStyle":"none","margin-top":"2px", "padding":"5px", "background-color":"#e67e22", "width":"130px", "text-align": "center", "height": "50px", "border-radius": "5px" }}>
                        <ion-icon name="basket" style={{"padding-right": "5px","font-size":"30px"}}></ion-icon>
                        Cart-<span>0</span>
                    </NavLink>

                    <Link to="/login" style={logstyle}>
                        <div className="login_button" class=" login_button">
                            <span className="logtxt">LOGIN</span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>

    </>
    );
};


export default MtubeNavbar;

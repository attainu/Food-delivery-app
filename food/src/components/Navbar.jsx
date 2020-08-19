import React from 'react';

import { NavLink, Link } from "react-router-dom";
import '../App.css';
const MNavbar = () => {


    const logstyle = {
        color: "white",
        marginRight: '40px',

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">

                <h2 className="material-icons" style={{ "fontSize": "45px", "textDecoration": "none", "marginLeft": "4%", "marginRight": "1%", "paddingTop": "0.5rem" }}>emoji_food_beverage
            </h2>

                <Link className="navbar-brand react" to="/" style={{ "fontSize": "45px", "fontWeight": "600", "marginRight": "50%", "textDecoration": "none" }}> Foodifly</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">


                    <a href="/" style={{ "color": "white", "marginLeft": "1rem" }} > Orders </a>
                    {/* cart */}
                    <a href="/cart" style={{ "color": "white", "marginLeft": "1rem" }} > Cart </a>
                    <a href="/login" style={{ "color": "white", "marginLeft": "1rem" }} > <span className="logtxt">LOGIN/SIGNUP</span> </a>

                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{ "color": "white" }}>
                        {/*orders  */}
                        <NavLink className="nav-item nav-link pro" href="#" to="/" style={{ "color": "white", "fontSize": "30px", "fontWeight": "400", "listStyle": "none" }}>Orders</NavLink>
                        {/* cart */}
                        <NavLink className="nav-item nav-link pro" href="#" to="/cart" style={{ "color": "white", "fontSize": "30px", "fontWeight": "400", "listStyle": "none" }}>Cart
                        </NavLink>

                        <Link to="/login" style={logstyle}>
                            <div className="login_button" style={{ "marginLeft": '0px', 'background': '#008000', "marginRight": '0px' }}>
                                <span className="logtxt">LOGIN/SIGNUP</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};


export default MNavbar;

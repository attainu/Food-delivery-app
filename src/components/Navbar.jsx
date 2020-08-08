import React from 'react';
import config from "../config";
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';
import '../App.css';
const MtubeNavbar = props => {
    const handleLogoutFailure = err => {
        console.log(err);
    };
    const handleLogoutSuccess = res => {
        console.log(res);
    }
    return (
        <Navbar color="light" light espand="md" className="nav">
            <Link className="react" to="/" style={{ "color": "green", "fontSize": "45px", "fontWeight": "600", "textDecoration": "none", "margin": "45px" }}>Foodify</Link>
            <div className="links"><NavLink className="pro" to="/profile" style={{ "color": "white", "fontSize": "30px", "fontWeight": "400", "listStyle": "none" }}>Hello,Gigib Hadid</NavLink>

                <NavLink className="pro" to="/orders" style={{ "color": "white", "fontSize": "30px", "fontWeight": "400", "listStyle": "none" }}>Orders</NavLink>

                <NavLink className="pro" to="/Cart" style={{ "color": "white", "fontSize": "30px", "fontWeight": "400", "listStyle": "none" }}>Cart</NavLink>
            </div>
            <Nav className="mr-auto" navbar>{!props.user === null ?

                (<NavItem>
                    <NavLink to="/login">Login</NavLink>
                </NavItem>) :
                <>


                    <div className="logout_button">
                        <GoogleLogout clientId={config.CLIENT_ID}
                            buttonText="Logout"
                            onLogoutSuccess={handleLogoutSuccess}
                            onFailure={handleLogoutFailure} />
                    </div>
                </>}
            </Nav >
        </Navbar >
    );
};


export default MtubeNavbar;

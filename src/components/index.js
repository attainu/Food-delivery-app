// import React, { Component } from 'react';
// import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// class Header extends Component {
//     render() {
//         return (
//             <Navbar bg="light" expand="lg">

//                 <NavDropdown title="Cart" id="basic-nav-dropdown">
//                     {this.props.favours.map(item => {
//                         let path = `/recipe/${item.recipe_id}`
//                         return <NavDropdown.Item key={item.recipe_id}>
//                             <Link to={path}>{item.title}</Link></NavDropdown.Item>
//                     })}
//                 </NavDropdown>

//             </Navbar >
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         favours: state.favouriteRecipes
//     }
// }

// export default connect(mapStateToProps)(Header);
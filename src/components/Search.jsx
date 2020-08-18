// import React, { Component } from "react";
// import { withRouter } from 'react-router-dom';

// class Search extends Component {
//     state = {
//         searchQuery: ""
//     };
//     handleChange = event => {
//         this.setState({ searchQuery: event.target.value });
//     };
//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.history.push(`/search/${this.state.searchQuery}`);
//     };
//     render() {
//         return (
//             <>

//                 <div className="subline" style={{ "fontWeight": "800", "fontSize": "20px", "color": "black", "paddingTop": "20px", "margin-left": "7%" }}>Order from your favourite Eatery-</div>
//                 <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center", "paddingBottom": "2%" }}>
//                     <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
//                         <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
//                         <div class="card-body">
//                             <h5 class="card-title">Downtown restaurant</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" class="btn btn-primary">Order Online</a>
//                         </div>
//                     </div>
//                     <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
//                         <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
//                         <div class="card-body">
//                             <h5 class="card-title">Downtown restaurant</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" class="btn btn-primary">Order Online</a>
//                         </div>
//                     </div>

//                     <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
//                         <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
//                         <div class="card-body">
//                             <h5 class="card-title">Downtown restaurant</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" class="btn btn-primary">Order Online</a>
//                         </div>
//                     </div>
//                     <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
//                         <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
//                         <div class="card-body">
//                             <h5 class="card-title">Downtown restaurant</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" class="btn btn-primary">Order Online</a>
//                         </div>
//                     </div>
//                     <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
//                         <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
//                         <div class="card-body">
//                             <h5 class="card-title">Downtown restaurant</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" class="btn btn-primary">Order Online</a>
//                         </div>
//                     </div>
//                     <div class="card" style={{ "width": "18rem", "margin-left": "2rem", "margin-bottom": "3%" }}>
//                         <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" class="card-img-top" alt="..." />
//                         <div class="card-body">
//                             <h5 class="card-title">Downtown restaurant</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" class="btn btn-primary">Order Online</a>
//                         </div></div>
//                 </div>
//             </>
//         );
//     }
// }
// // export default withRouter(Search);
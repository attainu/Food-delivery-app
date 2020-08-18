import React from 'react';
//import { Card } from 'react-bootstrap';


const index = (props) => {
   
    return (

        <div className="card" style={{ "width": "18rem", "marginLeft": "2rem", "marginBottom": "3%" }
        }>

            <img style={{ "height": '200px' }} className="card-img-top" src={props.rest.featured_image} onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} alt="cardimagecap" />
            <div className="card-body">
                <h5 className="card-title">{props.rest.name}</h5>
                <div className="card-text">
                    <div><span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}> Cuisines: </span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.cuisines}</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}> Location: </span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.location.address}</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}>Rating: </span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.user_rating.aggregate_rating}, {props.rest.user_rating.rating_text} </span>
                    </div>
                </div>
            </div>
            <div className="card-footer" style={{ background: "linear-gradient(90deg,snow,lightgrey)" }}>
                <a href="/menu" className="btn btn-primary">Order </a>
            </div>

        </div >
    )
}


export default index;

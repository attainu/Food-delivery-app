import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const index = (props) => {

    return (<Card style={{
        width: '25%', display: 'inline-block',
        verticalAlign: 'top', maxHeight: '550px', minHeight: '550px', border: '2px solid grey', borderRadius: '8px', padding: '0.5rem', marginLeft: '7%', marginBottom: '1rem'
    }} className="card" >
        <img src={props.rest.featured_image} class="card-img-top" alt="..." style={{ 'height': '230px', 'width': '250px', }} />
        <div class="card-body">
            <h5 class="card-title">{props.rest.name}</h5>
            <p class="card-text"> <div><span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}> Cuisines:</span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.cuisines}</span></div>
                <div><span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}> Location:</span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.location.address}</span></div>
            {/* order */}
                <Link to="/profile">
                    <a href="" class="btn btn-primary">Order Online</a> 
                </Link>   
            </p>
        </div>
    </Card>
    
    )
}

export default index;

import React from 'react'

const Section = () => {
    return (<div>
        <div className="card">

            <div className="card-body section-body">
                <h6 className="card-subtitle mb-2 text-muted" style={{ "color": "grey", "fontSize": "70px", "fontWeight": "600", "marginLeft": "7%" }}>Safe Food</h6>
                <h5 className="card-title" style={{ "color": "green", "fontSize": "85px", "fontWeight": "600", "marginLeft": "7%" }}>Delivery</h5>
                <img src="https://www.fixlastmile.com/wp-content/uploads/2020/04/food-delivery-safety-in-covid-19-main_image.png" alt="man-delivering" className="card-img-left man-delievering" style={{ "position": "absolute", "left": "37rem", "top": "-0.07rem", "height": "445px", "width": "46.5rem" }} />
                <div className="card-text" style={{ "color": "black", "marginLeft": "7%" }}><h6 className="card-text" > We Opt for No-Contact Delivery</h6>
Our restaurants and food delivery chains have launched systems to limit contact between food delivery persons and customers and have listed the steps on their websites and apps.
<br />
It is also advisable to hang a carry bag outside the main door of your house so that the delivery person can leave the food in it.</div>
                <a href="/menu" type="button" className="card-link btn btn-success" style={{ "marginLeft": "7%" }}>Order Now</a>
            </div>


        </div>
        <div className="subline" style={{ "fontWeight": "800", "fontSize": "20px", "color": "black", "textAlign": "center", "paddingTop": "50px" }}>Your favourite food, delivered with Foodify <img src="https://image.flaticon.com/icons/svg/3226/3226403.svg" alt="burger" style={{ "height": "38px", "paddingLeft": "10px" }} /></div>

    </div>

    )
}
export default Section;
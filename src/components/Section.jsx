import React from 'react'

const Section = () => {
    return (<div>
        <div className="card section">
            <div className="card-body section-body">
                <h6 className="card-subtitle mb-2" style={{ "color": "green", "fontSize": "90px", "fontWeight": "400", "marginLeft": "7%", "display": 'inline-block' }}>Safe Food <br />Delivery</h6><img src="https://www.fixlastmile.com/wp-content/uploads/2020/04/food-delivery-safety-in-covid-19-main_image.png" alt="man-delivering" className="card-img-left man-delievering" style={{ "height": "300px", "width": 'auto', "marginLeft": "15%", "marginTop": "-7%" }} />


                <div className="card-text subt" style={{ "color": "black", "marginLeft": "7%", "fontWeight": "700" }}><h6 className="card-text subh" style={{ "fontWeight": "800", "fontSize": "30px" }}> We Opt for No-Contact Delivery</h6>
Our restaurants and food delivery chains have launched systems to limit contact between food delivery persons and customers and have listed the steps on their websites and apps.
<br />
It is also advisable to hang a carry bag outside the main door of your house so that the delivery person can leave the food in it.</div>
                <a href="/menu" type="button" className="card-link btn btn-success" style={{ "marginLeft": "7%" }}>Order Now</a>
            </div>

        </div>
        <div className="subline order" style={{ "fontWeight": "800", "fontSize": "20px", "color": "black", "textAlign": "center", "paddingTop": "50px" }}>Your favourite food, delivered with Foodify <img src="https://image.flaticon.com/icons/svg/3226/3226403.svg" alt="burger" style={{ "height": "38px", "paddingLeft": "10px" }} /></div>

    </div>

    )
}
export default Section;
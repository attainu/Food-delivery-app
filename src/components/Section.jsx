import React from 'react'

const Section = () => {
    return (<div>
        <div class="card">

            <div class="card-body section-body">
                <h6 class="card-subtitle mb-2 text-muted" style={{ "color": "grey", "fontSize": "70px", "fontWeight": "600", "margin-left": "7%" }}>Safe Food</h6>
                <h5 class="card-title" style={{ "color": "green", "fontSize": "85px", "fontWeight": "600", "margin-left": "7%" }}>Delivery</h5>
                <img src="https://www.fixlastmile.com/wp-content/uploads/2020/04/food-delivery-safety-in-covid-19-main_image.png" alt="man-delivering" class="card-img-left" style={{ "position": "absolute", "left": "37rem", "top": "-0.07rem", "height": "445px", "width": "46.5rem" }} className="man-delievering" />
                <p class="card-text" style={{ "color": "black", "margin-left": "7%" }}><h6 class="card-text" > We Opt for No-Contact Delivery</h6>
Our restaurants and food delivery chains have launched systems to limit contact between food delivery persons and customers and have listed the steps on their websites and apps.
<br />
It is also advisable to hang a carry bag outside the main door of your house so that the delivery person can leave the food in it.</p>
                <button href="#" class="card-link btn btn-success" style={{ "margin-left": "7%" }}>Order Now</button>
            </div>


        </div>
        <div className="subline" style={{ "fontWeight": "800", "fontSize": "20px", "color": "black", "textAlign": "center", "paddingTop": "50px" }}>Your favourite food, delivered with Foodify <img src="https://image.flaticon.com/icons/svg/3226/3226403.svg" alt="burger" style={{ "height": "38px", "paddingLeft": "10px" }} /></div>

    </div>

    )
}
export default Section;
import React from 'react'
import footer from "../footer.png"
const Footer = () => {
    return (
        <div style={{ "background": "black", "display": "flex", "justifyContent": "center" }}>
            <img src={footer} alt="footer" style={{ "width": "150px", "height": "auto" }} />
            <div className="footertext" style={{ "color": "white", "fontWeight": "bold", "fontSize": "20px", "width": "18rem", "marginLeft": "15px", "paddingTop": "2rem" }}>Subscribe to our newsletter and get the best news directly to your inbox.
            <div style={{ "fontSize": "10px", "fontWeight": "400" }}>News and updates of new discounts and offers</div>

                <form class="form-inline">
                    <div class="form-group mb-2">
                        <label for="staticEmail2" class="sr-only">Email</label>
                        <input type="text" class="form-control mb-2" id="staticEmail2" placeholder="email@example.com" />
                        <input type="submit" class="btn mb-2" style={{ "fontSize": "12px", "background": "#fd345a", "color": "white" }} value="Subscribe Newsletter" />

                    </div>

                </form>     <a href="#top" style={{ "position": "absolute", "fontSize": "20px", "fontWeight": "600", "color": "white", "top": "110rem", "right": "10rem" }} data-toggle="tooltip" data-placement="right" title="Way to Top">/\</a>
            </div>

        </div>
    )
}
export default Footer;
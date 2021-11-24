import React from "react";
import './CustomerService.css';

function CustomerService() {
    return(
        <div className='customerService'>
            <h1>-Free Delivery-</h1>
            <p>1.Home delivery serivce</p>
            <p>
                We provides territory-wide delivery service, including Hong Kong Island, Kowloon, the New Territories, Tung Chung, Ma Wan, Discovery Bay and Airport. Please note that remote location may take more delivery time and extra delivery fees.
            </p>
            <p>
                * Some home appliances may not be provided delivery service to remote areas, please contact our customer service for details before purchase.
            </p>
            <p>
                * Extra delivery fees and handling fees maybe applied if need to move up the stairs. please contact our customer service for details before purchase.
            </p>
            <br />
            <p>2. Over 2,000 self pick-up location</p>
            <p>
                Base on the pacel size, our system would decide wether the order is fit for self pick-up location. The self pick-up location includes: smart locker (SF, Alfred, Pakpobox), SF service center, convienience store (OK, 7-11, Shell).
            </p>
            <p>Self Pick-up Steps:</p>
            <p>
                Pick up location is shown on the checkout page
                <br />
                Customers will recieve SMS notification when the parcels arrive the pick-up location
                <br />
                If the parcels are not collected within 30 hours, courier may take it back anytime
                <br />
                If the order is below $400, shipping fee will be charged.

            </p>
            <br />
            <p>3. Retail store pickup</p>
            <p>
            Retail store pickup, simple and fast.
            <br />
            When the product can be picked up, system will send an email notification, customer can present the email and pick it up at the store.

            </p>
            <br />
            <h1>-RETURNS & EXCHANGE POLICY-</h1>
            <p>ONLINE ONLY</p>
            <p>
                We hope that you are happy with your order. However, if for any reason you are not entirely satisfied, you may return any item in its original condition for exchange within 7 working days from delivery. 
            </p>
            <p>
                If you want to exchange the goods, please e-mail us at happyhalloween@halloween.com within 24 hours from the date you receive the goods. We will confirm your request of return order by e-mail.
            </p>
        </div>
    )
}

export default CustomerService;
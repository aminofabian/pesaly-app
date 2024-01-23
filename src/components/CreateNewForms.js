import Axios from "axios";
import React, { useState } from "react";

let paymentMethods = [
  {
    image: "mastercard.svg",
    category: "Mobile Wallets",
    description: "Purchase airtime and bonga points using a wide array of popular mobile wallets, including M-Pesa, PayPal, and Apple Pay."
  },
  {
    image: "mastercard.svg",
    category: "Debit/Credit Cards",
    description: "Utilize your debit or credit card for convenient transactions, allowing you to buy or sell airtime and bonga points with users globally."
  },
  {
    image: "mastercard.svg",
    category: "Gift Card Redemption",
    description: "Don't let your unused gift cards go to waste! Trade them in for airtime or bonga points on our platform."
  },
  {
    image: "mastercard.svg",
    category: "Digital Currencies",
    description: "We support a variety of digital currencies like Tether, Ethereum, Litecoin, and more, enabling you to exchange them for airtime and bonga points."
  },
  {
    image: "/mastercard.svg",
    category: "Cash Transactions",
    description: "We also accept cash payments for your convenience, no need for a bank account."
  },
  {
    image: "mastercard.svg",
    category: "Barter for Goods and Services",
    description: "Looking for a unique exchange? We've witnessed airtime and bonga points traded for a wide range of items, from electronics to services. Your options are limitless."
  }
];
function CreateNewForm(props) {
  return (
    <main className="main">
      <div className="title-description">
      <h2> Buy and Sell Airtime </h2>
     <p>Explore our Marketplace and start trading with your favorite payment methods or discover something new. </p>
      </div>
     
     <div className="paymentMethods">
      {paymentMethods.map(service=>{
        return <div className="service-box"> <ul>
          <img src={service.image} style={{width: '100px', height: 'auto'}}/>
          <h3>   {service.category} </h3>
        <p>{service.description}</p> </ul> </div>
        })}
     </div>
<div className="main-buttons">
<button type="button" class="btn btn-light" className="btn-1"><i>Buy Bonga Points</i></button>
<button type="button" class="btn btn-light" className="btn-2"><i>Buy Airtime</i></button>
</div>


    </main>
  );
}

export default CreateNewForm;
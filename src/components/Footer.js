import React from 'react';

const footerList = [
  {
    category: "For You",
    items: [
      "Buy Bonga Points",
      "Buy Airtime",
      "Money Exchange Services",
    ],
  },
  {
    category: "For Your Business",
    items: [
      "Partner with Us",
      "Business Solutions",
      "API Documentation",
    ],
  },
  {
    category: "Growth",
    items: [
      "Loyalty Rewards Program",
      "Affiliate Program",
      "Referral Program",
    ],
  },
  {
    category: "Community",
    items: [
      "Forum",
      "Events",
      "Blog",
      "Reviews",
    ],
  },
  {
    category: "Useful Links",
    items: [
      "Privacy Policy",
      "Terms of Service",
      "Contact Us",
      "FAQs",
    ],
  },
  {
    category: "About Us",
    items: [
      "Our Story",
      "Mission and Values",
      "Team",
      "Careers",
    ],
  },
];

function Footer (){
  return (
    <div>
      <footer className="footer">
        {footerList.map((categoryObj, index) => (
          <div key={index}>
            <h3>{categoryObj.category}</h3>
            <ul>
              {categoryObj.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <div className="logo"><img src='pessaly.png' style={{width: '120px', height: 'auto'}}/> </div>
      <div className="terms">
        <p>Pesaly” is a registered trademark of Zelisline, Inc. Copyright © 2022 Zelisline, Inc. All Rights Reserved. Zelisline Inc. has no relation to Safaricom, Airtel, and Telkom . We're an independent entity, facilitating bonga points and airtime transfer services on our website. Note that our services are handled manually and therefore, we can’t guarantee that your order will be processed instantly on being placed here. Please allow us 30 minutes or so to process your order. Any delay in processing is majorly because of a long queue of orders that come in.
        </p>
        <p>© 2021-2023 Pessaly, Inc.
</p>
      </div>
    </div>
  );
  
}
export default Footer;
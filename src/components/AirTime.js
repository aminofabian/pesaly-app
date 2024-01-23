import React, { useState } from "react";
import Axios from "axios";



const Airtime = ({ active, children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bongaPoints, setBongaPoints] = useState("");
  const [transactionType, setTransactionType] = useState("Buy");

  const calculateAmount = () => {
    switch (transactionType) {
      case "Buy":
        return (bongaPoints * 0.90).toFixed(2);
      case "Sell":
        return (bongaPoints * 0.78).toFixed(2);
      case "Loan":
        return (bongaPoints * 0.16).toFixed(2);
      default:
        return "";
    }
  };

  async function submitHandler(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      phoneNumber,
      bongaPoints,
      amount: calculateAmount(),
      transactionType
    };

    // Example of Axios request
    // const newUser = await Axios.post("/create-user", data);
    // props.setUsers(prev => prev.concat([newUser.data]));

    setName("");
    setEmail("");
    setPhoneNumber("");
    setBongaPoints("");
    setTransactionType("Buy");
  }
  return (
    <div className={`mb-3 ${active ? 'd-block' : 'd-none'}`}>
      {children}
      <div className={`mb-3 ${active ? 'd-block' : 'd-none'}`}>
      {children}
      <div className="container">
      <div className="d">
        <button
          className={`btn btn-${transactionType === "Buy" ? "primary" : "light"} me-2`}
          onClick={() => setTransactionType("Buy")}
        >
          <i>Buy Airtime Cheap</i>
        </button>
        <button
          className={`btn btn-${transactionType === "Sell" ? "primary" : "light"} me-2`}
          onClick={() => setTransactionType("Sell")}
        >
          <i>Sell Airtime</i>
        </button>
        <button
          className={`btn btn-${transactionType === "Loan" ? "primary" : "light"}`}
          onClick={() => setTransactionType("Loan")}
        >
          <i>Bonga Points for Airtime</i>
        </button>
      </div>
      <form className="custom-form p-3 bg-light bg-opacity-25 mb-5" onSubmit={submitHandler}>
        {/* Bonga Points Field */}
        <div className="mb-2">
          <input onChange={e => setBongaPoints(e.target.value)} value={bongaPoints} type="text" className="form-control" placeholder="Bonga Points" />
        </div>
        
        
        {/* Name Field */}
        <div className="mb-2">
          <input onChange={e => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Name" />
        </div>
        {/* Email Field */}
        <div className="mb-2">
          <input onChange={e => setEmail(e.target.value)} value={email} type="text" className="form-control" placeholder="Email" />
        </div>
        {/* Phone Number Field */}
        <div className="mb-2">
          <input onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" className="form-control" placeholder="Phone Number" />
        </div>
        
        {/* Amount Paragraph */}
        {bongaPoints && (
          <em className="mb-2">
             kes {calculateAmount()} 
          </em>
        )}

        <button className="btn btn-primary"><i>Pay With</i></button>
      </form>
    </div>

    </div>

    </div>
  );
}

export default Airtime;

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Axios from "axios";
import CreateNewForm from "./components/CreateNewForms";
import UserCard from "./components/UserCard";
import NavBar from "./components/NavBar";
import OurServices from "./components/OurServices";
import FormContainer from "./components/FormContainer";
import Footer from "./components/Footer";



function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function start() {
      const response = await Axios.get("/api/users");
      setUsers(response.data);
    }
    start();
  }, []);

  return ( <>
  <div className="navba">
  <NavBar />
  </div>
    <div className="container">
      <FormContainer />
      <CreateNewForm setUsers={setUsers} />
      <div className="user-grid">
      {users.map((user, index) => (
        <UserCard
          key={user._id}
          name={user.name} 
          transaction={user.transactions[0].transaction_type}
          bonga_points={user.bonga_points}
          amount={user.transactions[0].amount}
          timestamp={user.transactions[0].timestamp}
          id={UserCard._id} setUsers = {setUsers}

        /> ))}
      </div>

      <Footer />
    </div>
    </>
  );
}

// function UserCard(props) {
//   const dbTimestamp = new Date(props.timestamp);
//   const currentTimestamp = new Date();
//   const timeDifference = currentTimestamp - dbTimestamp;
//   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

//   return (
//     <div>
//       {props.name} - {props.transaction} - {props.bonga_points} Bonga Points  -- for Kshs {props.amount}   {days > 0 && `${days} days`}
//       {hours > 0 && `${hours} hours`} {minutes >0 && `${minutes} minutes `} ago

//     </div>
//   );
// }

const root = createRoot(document.querySelector("#app"));
root.render(<App />);

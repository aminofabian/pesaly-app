import React from "react";

function UserCard(props) {
  const calculateAmount = () => {
    switch (props.transactionType) {
      case "Buy":
        return (props.bongaPoints * 0.17).toFixed(2);
      case "Sale":
        return (props.bongaPoints * 0.22).toFixed(2);
      case "Loan":
        return (props.bongaPoints * 0.16).toFixed(2);
      default:
        return 0;
    }
  };

  const calculateTimeDifference = () => {
    const dbTimestamp = new Date(props.timestamp);
    const currentTimestamp = new Date();
    const timeDifference = currentTimestamp - dbTimestamp;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  return (
  <div className="text-muted-small">
  <div className='rendered-user'><em>{props.name}</em> </div>
  <div className='rendered-user'> Bought {props.bonga_points} Bonga Points </div>
  <div className='rendered-user'> for kes {props.amount}  </div>
  <div className='rendered-user'> <em>Time: {calculateTimeDifference().days} days, {calculateTimeDifference().hours} hours, {calculateTimeDifference().minutes} minutes ago </em> </div>
  </div>)
    
}

export default UserCard;

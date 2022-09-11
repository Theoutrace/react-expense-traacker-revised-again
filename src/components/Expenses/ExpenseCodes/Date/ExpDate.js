import React from "react";
import './ExpDate.css'

const ExpDate = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="date-container-div">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpDate;

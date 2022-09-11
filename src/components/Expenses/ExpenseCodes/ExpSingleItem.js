import React from "react";
import ExpDetails from "./ExpDetails";
// import ExpDate from "./Date/ExpDate";
import { ExpenseData } from "../Data/ExpenseData";

import './ExpSingleItem.css'


const ExpSingleItem = () => {
  return (
    <div className="all-exp-container-inner-div">
      {ExpenseData.map((item) => {
        return (
          <div>
            <ExpDetails
              dte={item.date}
              ttl={item.title}
              amt={item.amount}
              loc={item.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ExpSingleItem;

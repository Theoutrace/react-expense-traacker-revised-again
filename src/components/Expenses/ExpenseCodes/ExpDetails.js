import React, { useState } from "react";
import Card from "../../UI/Card";
import ExpDate from "./Date/ExpDate";
import "./ExpDetails.css";


const ExpDetails = (props) => {

  const [title,setTitle] = useState(props.ttl)
  // 

  const changeBtnHandler = ()=>{
    setTitle('changed')
    console.log('changeBtnHandler');
  }

  return (
    <Card>
      <div className="all-detail-container">
        <Card>
          <ExpDate date={props.dte} />
        </Card>
        <div className="title-container">
          <h2>{title}</h2>
        </div>
        <div className="amount-container-div">
          <h4 className="amount-container">$ {props.amt}</h4>
        </div>
        <div className="location-div">
          <h3>{props.loc}</h3>
        </div>
        <div className="button-container-div">
          <button className="button-class" onClick={changeBtnHandler}>Change</button>
          <button className="button-class dlt-button-class">Delete</button>
        </div>
      </div>
    </Card>
  );
};

export default ExpDetails;

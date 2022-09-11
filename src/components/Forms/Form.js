import React from "react";
import './Form.css'


const Form = () => {
  return (
    <form className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type="text" placeholder="Title"></input>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input
          type="number"
          placeholder="Amount"
          min="0.01"
          step="0.01"
        ></input>
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input
          type="date"
          min="0.19-01-01"
          max="2022-12-31"
        ></input>
      </div>
      <div className='new-expense__actions'>
        <button className="form-submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;

import React from "react";
import ExpSingleItem from "./components/Expenses/ExpenseCodes/ExpSingleItem";
import FormContainer from "./components/Forms/FormContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <FormContainer/>
      <div className="all-expense-container">
        <ExpSingleItem />
      </div>
    </div>
  );
}

export default App;

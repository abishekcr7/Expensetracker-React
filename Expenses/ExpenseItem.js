import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import "./Expenses.css"

import { useState } from "react";

function ExpenseItem(props) {
  var [price, setAmount] = useState(props.amount)
  const changeAmount = () =>{
    setAmount("Rs.100")
    console.log("Clicked")
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails amount={price} location={props.location} title={props.title}></ExpenseDetails>
      <button onClick={changeAmount}>Change Amount</button>
    </div>
  );
}

export default ExpenseItem;

import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setTitlevalue] = useState("");
  const [enteredAmount, setAmountvalue] = useState("");
  const [enteredDate, setDatevalue] = useState("");

  const outputTitle = (event) => {
    setTitlevalue(event.target.value);
  };
  const outputAmount = (event) => {
    setAmountvalue(event.target.value);
  };
  const outputDate = (event) => {
    setDatevalue(event.target.value);
  };

  const submitHandler= (event) =>{
      event.preventDefault()
      const expenseData= {
        title: enteredtitle,
        amount: enteredAmount,
        date:new Date(enteredDate)
      }
      props.onSaveExpenseData(expenseData)
      setTitlevalue('')
      setAmountvalue('')
      setDatevalue('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"  value ={enteredtitle} id="title" onChange={outputTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} id="amount" onChange={outputAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            value={enteredDate}
            onChange={outputDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

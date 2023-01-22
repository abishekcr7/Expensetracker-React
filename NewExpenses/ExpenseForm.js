import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredtitle, setTitlevalue] = useState("");
  const [enteredAmount, setAmountvalue] = useState("");
  const [entereDate, setDatevalue] = useState("");

  const outputTitle = (event) => {
    setTitlevalue(event.target.value);
  };
  const outputAmount = (event) => {
    setAmountvalue(event.target.value);
  };
  const outputDate = (event) => {
    setDatevalue(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" id="title" onChange={outputTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" id="amount" onChange={outputAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            onChange={outputDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

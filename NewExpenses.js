import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import './ExpenseForm.css';

const NewExpenses = (props) => {
  const saveExpenseDataHandler=(enteredExpenseData) =>{
    const expensedata={
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpenses(expensedata)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpenses;

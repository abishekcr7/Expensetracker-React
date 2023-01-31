import {useState} from "react";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import './ExpenseForm.css';

const NewExpenses = (props) => {
  const [isEditing,setIsEditing] = useState(false);
  const saveExpenseDataHandler=(enteredExpenseData) =>{
    const expensedata={
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpenses(expensedata)
    setIsEditing(false)
  }
  const startEditingHandler = () =>{
    setIsEditing(true)
  }
  const stopEditingHandler= () =>{
    setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpenses;

import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import './components/NewExpenses/NewExpense.css'
const Dummy_Expenses = [
  {
    id:1,
    title: "toilet paper",
    amount: "20",
    date: new Date(2022, 7, 14),
  },
  {
    id:2,
    title: "lunch",
    amount: "200",

    date: new Date(2022, 7, 14),
  },
  {
    id:3,
    title: "car insurance",
    amount: "4000",
    date: new Date(2022, 7, 14),
  },
  {
    id:4,
    title: "Grooming",
    amount: "1000",
    date: new Date(2022, 7, 14),
  },
];
function App() {
  const [expenses,setExpenses]=useState(Dummy_Expenses)
  const addExpenseHandler = (expense) => {
      setExpenses((prevExpense) => {
        return [expense, ...prevExpense]
      })
  }
  return (
    <div>
      <NewExpenses onAddExpenses={addExpenseHandler}/>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;

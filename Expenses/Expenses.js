import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props) {
  const [filteredYear, setSeletctedYear] = useState("2020");
  const yearChangeHandler = (selectedyear) => {
    setSeletctedYear(selectedyear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onSelectingYear={yearChangeHandler}
      />
      <ExpenseList items={filteredExpenses} />
      
    </div>
  );
}
export default Expenses;

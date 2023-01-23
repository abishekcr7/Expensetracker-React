import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props) {
  const [filteredYear, setSeletctedYear] = useState("2020");
  const yearChangeHandler = (selectedyear) => {
    setSeletctedYear(selectedyear);
  };
  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onSelectingYear={yearChangeHandler}
      />
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.title}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}
export default Expenses;

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import "./Expenses.css"


function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails amount={props.amount} location={props.location} title={props.title}></ExpenseDetails>
    </div>
  );
}

export default ExpenseItem;

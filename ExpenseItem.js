import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import "./Expenses.css"

function ExpenseItem(props) {
  const clickhandler= () =>{
    console.log("Clicked")
  }
  const deleteComp= () =>{
    console.log("Deleted")
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails amount={props.amount} location={props.location} title={props.title}></ExpenseDetails>
      <button onClick={clickhandler}>Change Detail</button>
      <button onClick={deleteComp}>Delete</button>
    </div>
  );
}

export default ExpenseItem;

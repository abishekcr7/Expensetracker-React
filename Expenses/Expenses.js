import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        location={props.item[0].LocationOfExpenditure}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        location={props.item[1].LocationOfExpenditure}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        location={props.item[2].LocationOfExpenditure}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        location={props.item[3].LocationOfExpenditure}
        date={props.item[3].date}
      ></ExpenseItem>
    </div>
  );
}
export default Expenses;
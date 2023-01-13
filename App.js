import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "toilet paper",
      amount: "Rs.20",
      LocationOfExpenditure: "Supermarket",
      date: new Date(2022, 7, 14),
    },
    {
      title: "lunch",
      amount: "Rs.200",
      LocationOfExpenditure: "Hotel",
      date: new Date(2022, 7, 14),
    },
    {
      title: "car insurance",
      amount: "Rs.4000",
      LocationOfExpenditure: "showroom",
      date: new Date(2022, 7, 14),
    },
    {
      title: "Grooming",
      amount: "Rs.1000",
      LocationOfExpenditure: "Saloon",
      date: new Date(2022, 7, 14),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        location={expenses[0].LocationOfExpenditure}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        location={expenses[1].LocationOfExpenditure}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        location={expenses[2].LocationOfExpenditure}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        location={expenses[3].LocationOfExpenditure}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

 
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import './components/NewExpenses/NewExpense.css'
function App() {
  const expenses = [
    {
      title: "toilet paper",
      amount: "Rs.20",
      date: new Date(2022, 7, 14),
    },
    {
      title: "lunch",
      amount: "Rs.200",

      date: new Date(2022, 7, 14),
    },
    {
      title: "car insurance",
      amount: "Rs.4000",
      date: new Date(2022, 7, 14),
    },
    {
      title: "Grooming",
      amount: "Rs.1000",
      date: new Date(2022, 7, 14),
    },
  ];
  const addExpenseHandler = (expense) => {
      console.log('in App.js')
      console.log(expense)
  }
  return (
    <div>
      <NewExpenses onAddExpenses={addExpenseHandler}/>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expense = [
    { title: "Car Insurance", amount: 299.23, date: new Date(2021, 7, 13) },
    { title: "Ramen", amount: 20.23, date: new Date(2022, 3, 29) },
    { title: "Manga", amount: 15.23, date: new Date(2021, 6, 3) },
    { title: "MacD", amount: 5.23, date: new Date(2021, 12, 18) },
  ];
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expense}/>
    </div>
  );
}

export default App;

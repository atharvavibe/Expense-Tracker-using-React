import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title: "Car Insurance", amount: 299.23, date: new Date(2021, 7, 13) },
    { title: "Ramen", amount: 20.23, date: new Date(2022, 3, 29) },
    { title: "Manga", amount: 15.23, date: new Date(2021, 6, 3) },
    { title: "MacD", amount: 5.23, date: new Date(2021, 12, 18) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

import React, { useState } from 'react';

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id:'1e', title: "Car Insurance", amount: 299.23, date: new Date(2021, 7, 13) },
  { id:'2f', title: "Ramen", amount: 20.23, date: new Date(2022, 3, 29) },
  { id:'3g', title: "Manga", amount: 15.23, date: new Date(2021, 6, 3) },
  { id:'5i', title: "MacD", amount: 5.23, date: new Date(2021, 12, 18) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })

  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

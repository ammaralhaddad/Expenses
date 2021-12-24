import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };
  return (
    <div>
      <ExpensesFilter
        // we will call it on expense filter to set the default date
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <Card className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

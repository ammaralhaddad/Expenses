import React, { useState } from "react";

import "./Expenses.css";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filterExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() == filterYear
  );

  return (
    <div>
      <ExpensesFilter
        // we will call it on expense filter to set the default date
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <Card className="expenses">
        <div className="expenses-list__fallback">
          {filterExpenses.length === 0 && <p>No expenses.</p>}
        </div>
        {filterExpenses.length > 0 &&
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

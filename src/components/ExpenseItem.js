import React from "react";

import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  // const expenseTitle = "Live insurance";
  // const expenseDate = new Date(2021, 12, 12);
  // const expencePrice = 299.99;
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

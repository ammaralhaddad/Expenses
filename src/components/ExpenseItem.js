import React from "react";

import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28</div>
      <div>
        <h2 className="expense-item__description">Car insurnce</h2>
        <div className="expense-item__price">299.99</div>
      </div>
    </div>
  );
}

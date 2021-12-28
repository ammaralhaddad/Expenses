import React, { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  // we return an empty string because event.target.value always retuen string
  const [enterTitle, setEnterTitle] = useState("");

  // we get the event.target.value from the console we jsut need to log the event to the console
  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const [enterAmount, setEnterAmount] = useState("");

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const [enterDate, SetEnterDate] = useState("");
  const dateChangeHandler = (event) => {
    SetEnterDate(event.target.value);
  };
  const submitHandler = (event) => {
    // so it will not always load the page when we refresh it
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(expenseData);
    // to reset the form after we submit
    setEnterTitle("");
    setEnterAmount("");
    SetEnterDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__controls ">
          <label>Title</label>
          <input value={enterTitle} onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__controls ">
          <label>Amount</label>
          <input
            //  to reset the form
            value={enterAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__controls ">
          <label>Date</label>
          <input
            value={enterDate}
            onChange={dateChangeHandler}
            type="date"
            min="2020-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

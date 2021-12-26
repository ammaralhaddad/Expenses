import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [form, setForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setForm(false);
  };

  const setFormHandler = () => {
    setForm(true);
  };

  const stopEditing = () => {
    setForm(false);
  };

  return (
    <div className="new-expense">
      {!form && <button onClick={setFormHandler}>Add new expenses </button>}
      {form && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;

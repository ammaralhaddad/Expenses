import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("updated");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      {/* // we have to pass props to date  to access the date  */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>button clicked</button> */}
    </Card>
  );
}

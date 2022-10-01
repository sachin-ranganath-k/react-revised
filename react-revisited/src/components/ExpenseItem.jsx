import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {

    const expenseDate=new Date(2022, 9, 25);
    const expenseItem='Home loan';
    const expenseAmount= 20000

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">{expenseAmount}/-</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

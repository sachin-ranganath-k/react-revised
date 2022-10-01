import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>Oct 1, 2022</div>
      <div className="expense-item__description">
        <h2>Home Loan</h2>
        <div className="expense-item__price">20,000/-</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

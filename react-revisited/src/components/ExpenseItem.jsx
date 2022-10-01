import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (propsFromApp) => {


  return (
    <div className="expense-item">
      {/* Passing date prop to ExpenseDate from here */}
      <ExpenseDate date={propsFromApp.expenseDate} />  
      <div className="expense-item__description">
        <h2>{propsFromApp.expenseTitle}</h2>
        <div className="expense-item__price">
          {propsFromApp.expenseAmount}/-
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;

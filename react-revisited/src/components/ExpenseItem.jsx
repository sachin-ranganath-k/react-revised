import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (propsFromApp) => {
  const expenseMonth = propsFromApp.expenseDate.toLocaleString("en-US", {
    month: "long",
  });

  const expenseDate=propsFromApp.expenseDate.toLocaleString("en-US", {
    day:'2-digit'
  })

  const expenseYear=propsFromApp.expenseDate.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{expenseDate}</div>
        <div>{expenseMonth}</div>
        <div>{expenseYear}</div>
      </div>
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

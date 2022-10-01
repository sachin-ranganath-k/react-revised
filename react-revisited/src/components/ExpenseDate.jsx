import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (propsFromExpenseItem) => {
  const expenseMonth = propsFromExpenseItem.date.toLocaleString("en-US", {
    month: "long",
  });

  const expenseDate = propsFromExpenseItem.date.toLocaleString("en-US", {
    day: "2-digit",
  });

  const expenseYear = propsFromExpenseItem.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{expenseDate}</div>
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-year">{expenseYear}</div>
    </div>
  );
};

export default ExpenseDate;

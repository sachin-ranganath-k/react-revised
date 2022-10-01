import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (propsFromApp) => {

    // const expenseDate=new Date(2022, 9, 25);
    // const expenseItem='Home loan';
    // const expenseAmount= 20000

  return (
    <div className="expense-item">
      <div>{propsFromApp.expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{propsFromApp.expenseTitle}</h2>
        <div className="expense-item__price">{propsFromApp.expenseAmount}/-</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

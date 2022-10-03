import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
//import CardContainer from "./CardContainer";

const ExpenseItem = (propsFromApp) => {
  return (
    // <CardContainer className="expense-item">   This can be used (props.children)
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
    // </CardContainer>
  );
};

export default ExpenseItem;

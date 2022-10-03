import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
//import CardContainer from "./CardContainer";

const ExpenseItem = (propsFromApp) => {

  const [expenseTitle, setExpenseTitle]=useState(propsFromApp.expenseTitle);

  return (
    // <CardContainer className="expense-item">   This can be used (props.children)
    <div className="expense-item">
      {/* Passing date prop to ExpenseDate from here */}
      <ExpenseDate date={propsFromApp.expenseDate} />
      <div className="expense-item__description"> 
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">
          {propsFromApp.expenseAmount}/-
        </div>
      </div>
      <button onClick={()=>setExpenseTitle('Computer')}>Change</button>
    </div>
    // </CardContainer>
  );
};

export default ExpenseItem;

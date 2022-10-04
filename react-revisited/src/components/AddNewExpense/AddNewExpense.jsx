import React from "react";
import './AddNewExpense.css'
import ExpenseForm from "./ExpenseForm";

const AddNewExpense = () => {
  return (
      <div className="new-expense">
        <ExpenseForm />
      </div>
  );
};

export default AddNewExpense;

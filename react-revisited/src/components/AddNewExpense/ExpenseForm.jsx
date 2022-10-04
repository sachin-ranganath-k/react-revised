import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [inputs, setInputs] = useState({
    enteredExpenseTitle: "",
    enteredExpenseAmount: "",
    enteredExpenseDate: "",
  });

  const handleTitleInput = (event) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        enteredExpenseTitle: event.target.value,
      };
    });
  };

  const handleAmountInput = (event) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        enteredExpenseAmount: event.target.value,
      };
    });
  };

  const handleDateInput = (event) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        enteredExpenseDate: event.target.value,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const {enteredExpenseAmount, enteredExpenseTitle,enteredExpenseDate } = inputs
    // console.log(inputs.enteredExpenseAmount,inputs.enteredExpenseTitle,inputs.enteredExpenseDate)
      console.log(enteredExpenseAmount,enteredExpenseTitle,enteredExpenseDate)
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={inputs.enteredExpenseTitle}
              onChange={handleTitleInput}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={inputs.enteredExpenseAmount}
              onChange={handleAmountInput}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={inputs.enteredExpenseDate}
              onChange={handleDateInput}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

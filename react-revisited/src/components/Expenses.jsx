import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (propsFromApp) => {
  return (
    <div>
      <ExpenseItem
        expenseTitle={propsFromApp.allItems[0].title}
        expenseAmount={propsFromApp.allItems[0].amount}
        expenseDate={propsFromApp.allItems[0].date}
      />

      <ExpenseItem
        expenseTitle={propsFromApp.allItems[1].title}
        expenseAmount={propsFromApp.allItems[1].amount}
        expenseDate={propsFromApp.allItems[1].date}
      />

      <ExpenseItem
        expenseTitle={propsFromApp.allItems[2].title}
        expenseAmount={propsFromApp.allItems[2].amount}
        expenseDate={propsFromApp.allItems[2].date}
      />

      <ExpenseItem
        expenseTitle={propsFromApp.allItems[3].title}
        expenseAmount={propsFromApp.allItems[3].amount}
        expenseDate={propsFromApp.allItems[3].date}
      />
    </div>
  );
};

export default Expenses;

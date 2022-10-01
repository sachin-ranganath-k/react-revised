import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "News Paper",
      amount: 500.00,
      date: new Date(2022, 7, 14),
    },
    { id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2022, 2, 12) },
    {
      id: "e3",
      title: "Home loan",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "Table",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];
  return (
    <div>
      <ExpenseItem 
        expenseTitle={expenses[0].title} 
        expenseAmount={expenses[0].amount} 
        expenseDate={expenses[0].date}
      />

      <ExpenseItem 
        expenseTitle={expenses[1].title} 
        expenseAmount={expenses[1].amount} 
        expenseDate={expenses[1].date}
      />

      <ExpenseItem 
        expenseTitle={expenses[2].title} 
        expenseAmount={expenses[2].amount} 
        expenseDate={expenses[2].date}
      />

      <ExpenseItem 
        expenseTitle={expenses[3].title} 
        expenseAmount={expenses[3].amount} 
        expenseDate={expenses[3].date}
      />
    </div>
  );
}

export default App;

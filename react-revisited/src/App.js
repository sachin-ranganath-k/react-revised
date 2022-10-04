import AddNewExpense from "./components/AddNewExpense/AddNewExpense";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "News Paper",
      amount: 500.0,
      date: new Date(2022, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
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
    <div style={{ margin: "0 10% 0 10%" }}>
      <AddNewExpense />
      <Expenses allItems={expenses} />
    </div>
  );
}

export default App;

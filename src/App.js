import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense'

import React, {useState} from 'react';

const App = () => {

    const [expenses, setExpenses] = useState(
        [
            {
                id: 'e1',
                title: "Car insurance",
                amount: "294.5",
                date: new Date(2021, 5, 12),
            },
            {
                id: 'e2',
                title: "New wooden desk",
                amount: "320.5",
                date: new Date(2022, 5, 12),
            },
            {
                id: 'e3',
                title: "Mac-Book pro",
                amount: "500.5",
                date: new Date(2021, 7, 12),
            },
        ]
    );

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...expenses];
        });
    };

  return (
      <div>
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;

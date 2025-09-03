import React, { useState, useEffect } from 'react';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransactionModal from './components/AddTransactionModal';
import FloatingButton from './components/FloatingButton';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getTransactions = async () => {
      const transactionsFromServer = await fetchTransactions();
      setTransactions(transactionsFromServer);
    };

    getTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await fetch('http://localhost:5001/transactions');
    const data = await res.json();
    return data;
  };

  const addTransaction = async (transaction) => {
    const res = await fetch('http://localhost:5001/transactions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });

    const data = await res.json();

    setTransactions([...transactions, data]);
    setIsModalOpen(false);
  };

  const deleteTransaction = async (id) => {
    await fetch(`http://localhost:5001/transactions/${id}`, {
      method: 'DELETE',
    });

    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="title-container">
            <img src="/Malta.png" alt="Malta Logo" className="logo" />
          </div>
          <Balance transactions={transactions} />
          <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />
        </div>
      </div>
      <FloatingButton onClick={() => setIsModalOpen(true)} />
      <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddTransaction={addTransaction} />
    </div>
  );
}

export default App;
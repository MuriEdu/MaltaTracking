import React, { useState, useEffect } from 'react';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransactionModal from './components/AddTransactionModal';
import FloatingButton from './components/FloatingButton';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTransaction = (transaction) => {
    const id = Date.now(); // Simple unique ID generation
    const newTransaction = { id, ...transaction };
    setTransactions([...transactions, newTransaction]);
    setIsModalOpen(false);
  };

  const deleteTransaction = (id) => {
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
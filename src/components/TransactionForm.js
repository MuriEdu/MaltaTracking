
import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('expense');

  const onSubmit = e => {
    e.preventDefault();

    if (!text || !amount) {
      alert('Please add a text and amount');
      return;
    }

    const newTransaction = {
      text,
      amount: type === 'expense' ? -parseFloat(amount) : parseFloat(amount),
    };

    onAddTransaction(newTransaction);

    setText('');
    setAmount(0);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title text-center">Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div className="btn-group">
            <button type="button" className={`btn btn-income ${type === 'income' ? 'active' : ''}`} onClick={() => setType('income')}>Income</button>
            <button type="button" className={`btn btn-expense ${type === 'expense' ? 'active' : ''}`} onClick={() => setType('expense')}>Expense</button>
          </div>
          <div className="form-group">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="form-control" id="text" placeholder="Description" />
          </div>
          <div className="form-group">
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" id="amount" placeholder="Amount" />
          </div>
          <button className="btn btn-primary btn-block mt-3">Add transaction</button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;

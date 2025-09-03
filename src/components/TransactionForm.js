
import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

const TransactionForm = ({ onAddTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const onSubmit = e => {
    e.preventDefault();

    if (!text || !amount) {
      alert('Please add a text and amount');
      return;
    }

    console.log('Amount before parsing:', amount);
    console.log('Type:', type);

    const newTransaction = {
      text,
      amount: type === 'expense' ? -parseFloat(amount) : parseFloat(amount),
    };

    console.log('New Transaction:', newTransaction);

    onAddTransaction(newTransaction);

    setText('');
    setAmount('');
  };

  return (
    <>
      <h3 className="card-title">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="btn-group">
          <button type="button" className={`btn btn-income ${type === 'income' ? 'active' : ''}`} onClick={() => setType('income')}>Income</button>
          <button type="button" className={`btn btn-expense ${type === 'expense' ? 'active' : ''}`} onClick={() => setType('expense')}>Expense</button>
        </div>
        <div className="form-group">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="form-control" id="text" placeholder="Description" />
        </div>
        <div className="form-group">
          <CurrencyInput
            id="amount"
            name="amount"
            placeholder="Amount"
            defaultValue={0}
            decimalsLimit={2}
            onValueChange={(value, name) => setAmount(value)}
            prefix="R$ "
            groupSeparator="."
            decimalSeparator=","
            className="form-control"
            inputMode="decimal"
          />
        </div>
        <button className="btn btn-primary mt-3">Add transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;

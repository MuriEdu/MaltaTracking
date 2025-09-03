
import React from 'react';

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list-group">
        {transactions.map(transaction => (
          <li key={transaction.id} className={`list-group-item d-flex justify-content-between align-items-center`}>
            {transaction.text}
            <div>
              <span className={transaction.amount < 0 ? 'text-danger' : 'text-success'}>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>
              <button className="btn btn-danger btn-sm ml-2" onClick={() => onDeleteTransaction(transaction.id)}>x</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;


import React from 'react';

const Balance = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  const balance = (income - expense).toFixed(2);

  return (
    <div className="card my-3">
        <div className="card-body">
            <div className="row text-center">
                <div className="col-sm-4">
                    <h4>Income</h4>
                    <p className="text-success">${income}</p>
                </div>
                <div className="col-sm-4">
                    <h4>Expense</h4>
                    <p className="text-danger">${expense}</p>
                </div>
                <div className="col-sm-4">
                    <h4>Balance</h4>
                    <p className={balance >= 0 ? 'text-success' : 'text-danger'}>${balance}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Balance;

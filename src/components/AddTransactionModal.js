
import React from 'react';
import TransactionForm from './TransactionForm';
import '../App.css';

const AddTransactionModal = ({ isOpen, onClose, onAddTransaction }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <TransactionForm onAddTransaction={onAddTransaction} />
      </div>
    </div>
  );
};

export default AddTransactionModal;

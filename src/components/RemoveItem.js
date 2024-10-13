import React, { useState } from 'react';
import './RemoveItem.css';

const RemoveItem = ({ items, onRemove }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemove = () => {
    const item = items.find(item => item.id === id);
    if (item) {
      onRemove(id);
      setMessage(true);
      setMessage(`Item ${item.name} has been removed from the inventory`);
    } else {
      setMessage('Item not found!');
    }
    setTimeout(() => setMessage(false), 2000);
  };

  return (
    <div className='remitem'>
      <h2>Remove Item</h2>
      <input className='remove-item' placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button className='submit-remove' onClick={handleRemove}>Remove</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RemoveItem;

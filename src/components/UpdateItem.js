import React, { useState } from 'react';
import './UpdateItem.css';

const UpdateItem = ({ items, onUpdate }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState('');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = () => {
    const item = items.find(item => item.id === id);
    if (item) {
      const oldValue = item[field];
      onUpdate(id, field, newValue);
      setMessage(true);
      setMessage(`${field} of item ${item.name} updated from ${oldValue} to ${newValue}`);
    } else {
      setMessage('Item not found!');
    }
    setTimeout(() => setMessage(false), 2000);
  };

  return (
    <div className='UpItem'>
      <h2>Update Item</h2>
      <input className='id-num' placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <select className='dropdown-change' value={field} onChange={(e) => setField(e.target.value)}>
        <option value="">Select Field</option>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <input className='new-num' placeholder="New Value" type="number" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      <button className='submit-update' onClick={handleUpdate}>Update</button>
      {message && <p>{message}</p>}
    </div>
  );
};

    export default UpdateItem;

import React, { useState } from 'react';
import { validateItemFields } from '../utils/validations';
import './AddItem.css';

const AddItem = ({ onAdd, existingItems }) => {
  const [item, setItem] = useState({ id: '', name: '', quantity: '', price: '', category: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Duplicate = existingItems.some(
      (existingItem) => existingItem.id === item.id || existingItem.name.toLowerCase() === item.name.toLowerCase()
    );

    if (Duplicate){
      setMessage('ERROR404: Duplicate ID or Name. Please enter unique value');
    } else {

    if (item.quantity <= 0) {
      setMessage('The quantity must be greater than 0.');
    } else{

    const validationMessage = validateItemFields(item);
    if (validationMessage) {
      setMessage(validationMessage);
    } else {
      onAdd(item);
      setMessage(true);
      setMessage('Item added successfully!');
      setItem({ id: '', name: '', quantity: '', price: '', category: '' });
  }
}
}
    setTimeout(() => setMessage(false), 2000);
  };

  return (
    <div className='AddingItem'>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input className='id-container' name="id" value={item.id} onChange={handleChange} placeholder="ID" required />
        <input className='name-container' name="name" value={item.name} onChange={handleChange} placeholder="Name" required />
        <input className='quantity-container' name="quantity" type="number" value={item.quantity} onChange={handleChange} placeholder="Quantity" required />
        <input className='price-container' name="price" type="number" value={item.price} onChange={handleChange} placeholder="Price" required />
        <select className='dropdown-item' name="category" value={item.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button className='submit-button' type="submit">Add Item</button>
      </form>
      {message && <p>{message}</p>}

    </div>
  );
};

export default AddItem;
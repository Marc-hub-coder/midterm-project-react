import React, { useState } from 'react';
import './AddItem.js';
import './UpdateItem.js';
import './RemoveItem.js';
import './DisplayItemsByCategory.css';

const DisplayItemsByCategory = ({ items }) => {
  const [category, setCategory] = useState('');

  const filteredItems = items.filter(item => item.category === category);

  return (
    <div className='disitemscat'>
      <h2>Items by Category</h2>
      <select className='dropdown-category' onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayItemsByCategory;

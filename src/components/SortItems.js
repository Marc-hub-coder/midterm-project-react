import React, { useState } from 'react';
import './AddItem';
import './UpdateItem';
import './SortItems.css';

const SortItems = ({ items }) => {
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'quantity') {
      return order === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity;
    } else if (sortBy === 'price') {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    }
    return 0;
  });

  return (
    <div className='srtitem'>
      <h2>Sort Items</h2>
      <select className='dropdown-type' onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <select className='dropdown-arrange' onChange={(e) => setOrder(e.target.value)}>
        <option value="">Order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortItems;

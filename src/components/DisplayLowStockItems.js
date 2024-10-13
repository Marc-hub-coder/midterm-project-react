import React from 'react';
import './AddItem';
import './UpdateItem';
import './RemoveItem';
import './DisplayLowStockItems.css';

const DisplayLowStockItems = ({ items }) => {
  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <div className='dislowstock'>
      <h2>Low Stock Items</h2>
      {lowStockItems.length > 0 ? (
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
            {lowStockItems.map(item => (
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
      ) : (
        <p>No low stock items.</p>
      )}
    </div>
  );
};

export default DisplayLowStockItems;

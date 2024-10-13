import React, { useState } from 'react';
import './SearchItem.css';

const SearchItem = ({ items }) => {
  const [id, setId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = () => {
    const item = items.find(item => item.id === id);
    if (item) {
      setFoundItem(item);
      setMessage('');
    } else {
      setMessage(true)
      setFoundItem(null);
      setMessage('Item not found!');
    }
    setTimeout(() => setMessage(false), 2000);
  };

  return (
    <div className='srchitem'>
      <h2>Search Item</h2>
      <input className='search-id' placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button className='search-button' onClick={handleSearch}>Search</button>
      {message && <p>{message}</p>}
      {foundItem && (
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
            <tr>
              <td>{foundItem.id}</td>
              <td>{foundItem.name}</td>
              <td>{foundItem.quantity}</td>
              <td>{foundItem.price}</td>
              <td>{foundItem.category}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchItem;

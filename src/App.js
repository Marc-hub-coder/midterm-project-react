import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css';
import AddItem from "./components/AddItem";
import UpdateItem from "./components/UpdateItem";
import RemoveItem from "./components/RemoveItem";
import DisplayItemsByCategory from "./components/DisplayItemsByCategory";
import SearchItem from "./components/SearchItem";
import { useState } from "react";
import SortItems from "./components/SortItems";
import DisplayLowStockItems from "./components/DisplayLowStockItems";

function App() {
  const [items, setItems] = useState([]);
  const [showAllItems, setShowAllItems] = useState(true);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleUpdateItem = (id, field, newValue) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: parseInt(newValue, 10) } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
      <div className='navigate'>
        <header>
          INVENTORY MANAGEMENT SYSTEM
        </header>

        <main>
        <Router>
        <nav className="button-container">
          <Link to="/" onClick={() => setShowAllItems(true)}>
            <button className="Home">
              Home
            </button>
          </Link>

          <Link to="/AddItem" onClick={() => setShowAllItems(true)}>
            <button className="addingItem">
              Add Item
            </button>
          </Link>

          <Link to="/UpdateItem" onClick={() => setShowAllItems(true)}>
          <button className="updatingItem">
            Update Item
          </button>
          </Link>

          <Link to="/RemoveItem" onClick={() => setShowAllItems(true)}>
          <button className="RemovingItem">
            Remove Item
          </button>
          </Link>

          <Link to="/DisplayItemsByCategory" onClick={() => setShowAllItems(false)}>
          <button className="DisplayingByCategory">
            Display Items By Category
          </button>
          </Link>

          <Link to="/SearchItem" onClick={() => setShowAllItems(false)}>
          <button className="SearchingItem">
            Search Item
          </button>
          </Link>

          <Link to="/SortItems" onClick={() => setShowAllItems(false)}>
          <button className="sortingitem">
            Sort Item
          </button>
          </Link>

          <Link to="/DisplayLowStock" onClick={() => setShowAllItems(false)}>
          <button className="DisplayingLowStock">
            Display Low Stock Items
          </button>
          </Link>

          </nav>

          <Routes>
            <Route path="/AddItem" element={<AddItem onAdd={handleAddItem} existingItems={items} />} />
            <Route path="/UpdateItem" element={<UpdateItem items={items} onUpdate={handleUpdateItem} />} />
            <Route path="/RemoveItem" element={<RemoveItem items={items} onRemove={handleRemoveItem} />} />
            <Route path="/DisplayItemsByCategory" element={<DisplayItemsByCategory items={items} />} />
            <Route path="/SearchItem" element={<SearchItem items={items} />} />
            <Route path="/SortItems" element={<SortItems items={items} />} />
            <Route path="/DisplayLowStock" element={<DisplayLowStockItems items={items} />} />
          </Routes>

          </Router>

          {showAllItems && ( <>
          <div className="whole-table">
          <h2>All Items</h2>
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
        {items.map(item => (
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
    </>
    )}
        </main>
      </div>
  );
}

export default App;

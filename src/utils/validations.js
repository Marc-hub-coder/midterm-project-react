export const validateItemFields = ({ id, name, quantity, price, category }) => {
    if (!id || !name || !category) return 'ID, Name, and Category are required!';
    if (isNaN(quantity) || quantity < 0) return 'Quantity must be a non-negative number!';
    if (isNaN(price) || price < 0) return 'Price must be a non-negative number!';
    return null;
  };
  
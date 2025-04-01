'use client'
import React, { useState, useMemo } from 'react';

function ShoppingCart() {
  // State to store the items in the shopping cart
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 15 },
    { id: 3, name: 'Product C', price: 20 },
  ]);

  // Calculate the total price of items in the cart
  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}: ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <p>Length of cart - {cartItems.length}</p>
      <button onClick={() => addItemToCart({ id: 4, name: 'Product D', price: 25 })}>
        Add Product D
      </button>
    </div>
  );
}

export default ShoppingCart;
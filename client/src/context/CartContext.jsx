import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [total, setTotal] = useState(0);

  // Load cart items from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      calculateTotal(parsedCart);
    }
  }, []);

  // Calculate total price
  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(sum);
  };

  // Add item to cart
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    
    let updatedItems;
    
    if (existingItemIndex >= 0) {
      // Item already exists, update quantity
      updatedItems = cartItems.map((item, index) => 
        index === existingItemIndex 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
    } else {
      // Item doesn't exist, add new item
      updatedItems = [...cartItems, { ...product, quantity: 1 }];
    }
    
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    
    // Open cart drawer
    setCartOpen(true);
  };

  // Update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  // Remove item from cart
  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
    localStorage.removeItem('cart');
  };

  // Toggle cart drawer
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  // Get cart item count
  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Context value
  const value = {
    cartItems,
    cartOpen,
    total,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    toggleCart,
    getItemCount,
    setCartOpen
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUS from './pages/AboutUS' ;
import CustomPC from './pages/CustomPC' ;
// import ProductList from './Components/Footer/ProductList';
// import AddProduct from './Components/Footer/AddProduct';
import Cart from './Components/Cart/Cart';
import CartPage from './Components/Cart/CartPage';
import Dashboard from './pages/Dashboard';
import { CartProvider, useCart } from './context/CartContext';

// Wrapper component to access cart context
const AppContent = () => {
  const { cartOpen, setCartOpen } = useCart();
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/custom-pc" element={<CustomPC />} />
        {/* <Route path="/product" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} /> */}
        <Route path="/Cart" element={<Cart />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      {/* Cart drawer */}
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

const App = () => (
  <Router>
    <CartProvider>
      <AppContent />
    </CartProvider>
  </Router>
);

export default App;


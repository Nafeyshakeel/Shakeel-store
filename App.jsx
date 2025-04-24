import React, { useState } from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home');

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find(p => p.name === product.name);
      if (found) {
        return prev.map(p => p.name === product.name ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-green-50 text-gray-800 p-4">
      <nav className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold text-green-700">Saeed Store</h1>
        <div className="space-x-3">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('cart')}>Cart ({cart.length})</button>
        </div>
      </nav>
      {page === 'home' && <Home addToCart={addToCart} />}
      {page === 'cart' && <Cart cart={cart} setPage={setPage} />}
      {page === 'checkout' && <Checkout cart={cart} />}
    </div>
  );
}

export default App;
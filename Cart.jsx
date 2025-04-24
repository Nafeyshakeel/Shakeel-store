import React from 'react';

const Cart = ({ cart, setPage }) => {
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="mb-2">
              {item.name} - {item.qty} x Rs. {item.price} = Rs. {item.qty * item.price}
            </div>
          ))}
          <p className="mt-4 font-semibold">Total: Rs. {total}</p>
          <button className="mt-4 px-4 py-1 bg-blue-600 text-white rounded" onClick={() => setPage('checkout')}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
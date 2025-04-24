import React, { useState } from 'react';

const Checkout = ({ cart }) => {
  const [form, setForm] = useState({ name: '', address: '', phone: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Order Placed:', { ...form, cart });
    alert('Order placed successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-xl font-bold">Checkout</h2>
      <input name="name" onChange={handleChange} required placeholder="Name" className="block border p-2 w-full" />
      <input name="address" onChange={handleChange} required placeholder="Address" className="block border p-2 w-full" />
      <input name="phone" onChange={handleChange} required placeholder="Phone" className="block border p-2 w-full" />
      <button type="submit" className="bg-green-600 text-white px-4 py-1 rounded">Place Order</button>
    </form>
  );
};

export default Checkout;
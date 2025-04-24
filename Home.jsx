import React from 'react';

const products = [
  { name: "Sugar", price: 170, unit: "kg" },
  { name: "Aata (1kg)", price: 70 },
  { name: "Aata (10kg)", price: 700 },
  { name: "Rice", price: 180, unit: "kg" },
  { name: "Cooking Oil", price: 450, unit: "kg" },
  { name: "Ghee", price: 480, unit: "kg" },
  { name: "Daal Moong", price: 400, unit: "kg" },
  { name: "Daal Mash", price: 400, unit: "kg" }
];

const Home = ({ addToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {products.map((product, index) => (
      <div key={index} className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-green-600 font-bold">Rs. {product.price}{product.unit ? '/' + product.unit : ''}</p>
        <button className="mt-2 px-4 py-1 bg-green-600 text-white rounded" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

export default Home;
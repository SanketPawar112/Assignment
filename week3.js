import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductDetails from './pages/ProductDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

// --- pages/LandingPage.jsx ---
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product One', price: '$29.99', image: '/product1.jpg' },
  { id: 2, name: 'Product Two', price: '$39.99', image: '/product2.jpg' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 text-white p-4">BrandName</nav>

      <header className="text-center p-10 bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <p className="text-lg mt-2">Find the best products for your needs</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
            <Link to={/product/${product.id}} className="text-blue-500 hover:underline mt-2 inline-block">View Details</Link>
          </div>
        ))}
      </main>

      <footer className="bg-gray-200 text-center p-4 mt-auto">
        <p>Follow us: 
          <a href="#" className="mx-2 text-blue-500">Twitter</a>
          <a href="#" className="mx-2 text-blue-600">Facebook</a>
        </p>
      </footer>
    </div>
  );
}

// --- pages/ProductDetails.jsx ---
import React from 'react';
import { useParams } from 'react-router-dom';

const productData = {
  1: { name: 'Product One', description: 'Detailed info about Product One', price: '$29.99' },
  2: { name: 'Product Two', description: 'Detailed info about Product Two', price: '$39.99' },
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = productData[id];

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg mt-2">{product.description}</p>
      <p className="text-xl text-green-600 mt-4">{product.price}</p>
    </div>
  );
}

// --- server.js (Express Backend) ---
const express = require('express');
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
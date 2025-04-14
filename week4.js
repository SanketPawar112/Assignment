import React, { useState } from 'react';

// 1. TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState('');

  return (
    <div className="p-4 border rounded mb-6">
      <h2 className="text-xl font-bold mb-2">1. Text Updater</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Type something..."
      />
      <p className="mt-2 text-gray-700">You typed: {text}</p>
    </div>
  );
}

// 2. InputLoggerForm Component
function InputLoggerForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-6">
      <h2 className="text-xl font-bold mb-2">2. Form with Console Log</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 rounded mr-2"
        placeholder="Enter something"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

// 3. UserCard Component
function UserCard({ name, email }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-6">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

// 4. CustomButton Component
function CustomButton() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="p-4 border rounded mb-6">
      <h2 className="text-xl font-bold mb-2">4. Clickable Button</h2>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Click Me
      </button>
    </div>
  );
}

// 5. LoginForm Component.
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(Email: ${email}\nPassword: ${password});
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-6">
      <h2 className="text-xl font-bold mb-4">5. Login Form</h2>
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Login
      </button>
    </form>
  );
}

// Combined App
function App() {
  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6">
      <TextUpdater />
      <InputLoggerForm />
      <UserCard name="John Doe" email="john.doe@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
}

export default App;
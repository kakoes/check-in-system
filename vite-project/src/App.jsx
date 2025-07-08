import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}




import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    storeNumber: '',
    type: '',
    company: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Hook up to Firestore later
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" onChange={handleChange} />
      <input name="storeNumber" placeholder="Store Number" onChange={handleChange} />
      <select name="type" onChange={handleChange}>
        <option value="">Select Type</option>
        <option value="Maintenance">Maintenance</option>
        <option value="Vendor">Vendor</option>
      </select>
      <input name="company" placeholder="Your Company Name" onChange={handleChange} />
      <button type="submit">Check In</button>
    </form>
  );
}

export default App;

export default App

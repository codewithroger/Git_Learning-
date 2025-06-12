import React, { useState } from 'react';
import axios from 'axios'; // ✅ This is required

const DashBoard = () => {
  const [form, setForm] = useState({ first: '', last: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/user', form);
      console.log("User saved:", res.data);
    } catch (error) {
      console.error("Error saving user:", error.response?.data || error.message);
    }
  };

  return (
    <div className="p-4 space-y-4 w-64">
      <div>
        <label className="block mb-1">First Name</label>
        <input
          name="first"
          value={form.first}
          onChange={handleChange}
          placeholder="Name"
          className="border border-gray-200 rounded-md p-2 w-full"
          type="text"
        />
      </div>

      <div>
        <label className="block mb-1">Last Name</label>
        <input
          name="last"
          value={form.last}
          onChange={handleChange}
          className="border border-gray-200 rounded-md p-2 w-full"
          type="text"
        />
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DashBoard;

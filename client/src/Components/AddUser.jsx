import React, { useState } from "react";
import { toast } from "react-toastify";

const AddUser = ({ onUserAdded }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = async () => {
    if (!name.trim()) {
      setMessage("Please enter a valid name.");
      return;
    }

    const res = await fetch("https://basic-leaderbord-4.onrender.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    if (data.success) {
      toast.success("✅ User added successfully!");
      setName("");
      onUserAdded();
    } else {
      toast.error("❌ Failed to add user.");
    }
  };

  return (
    <div className="mb-8 mt-4">
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Add new user..."
          className="px-3 py-2 border border-gray-300 rounded-xl w-64"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
        >
          Add
        </button>
      </div>
      {message && <p className="text-sm text-center text-gray-600 mt-2">{message}</p>}
    </div>
  );
};

export default AddUser;

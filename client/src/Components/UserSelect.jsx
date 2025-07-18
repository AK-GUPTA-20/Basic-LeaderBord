import React from "react";

const UserSelect = ({ users, selectedUser, setSelectedUser }) => {
  return (
    <div className="flex justify-center mt-6">
      <select
        className="px-5 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold 
                   border-none rounded-xl shadow-md 
                   focus:outline-none focus:ring-4 focus:ring-green-300 
                   hover:brightness-110 transition-all duration-300 ease-in-out 
                   appearance-none relative"
        value={selectedUser || ""}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="" className="text-gray-700">-- Select a user --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id} className="text-gray-700">
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;
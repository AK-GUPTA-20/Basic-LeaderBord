import React, { useEffect, useState } from "react";
import UserSelect from "./Components/UserSelect";
import Leaderboard from "./Components/Leaderboard";
import ClaimButton from "./Components/ClaimButton";
import AddUser from "./Components/AddUser";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [triggerRefresh, setTriggerRefresh] = useState(false);

  const fetchUsers = async () => {
    const res = await fetch("https://basic-leaderbord-4.onrender.com/api/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, [triggerRefresh]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 opacity-90 hover:opacity-100 
                      hover:scale-105 transition-all duration-300 
                      shadow-lg rounded-xl p-6 w-80 text-center">
        <h2 className="text-white text-2xl font-bold">🏆 Weekly Leaderboard</h2>


        <UserSelect users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

        <ClaimButton selectedUser={selectedUser} onClaimed={() => setTriggerRefresh(!triggerRefresh)} />

        <AddUser onUserAdded={() => setTriggerRefresh(!triggerRefresh)} />

        <Leaderboard users={users} />
      </div>
    </div>
  );
}

export default App;

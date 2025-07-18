import React from "react";

const Leaderboard = ({ users }) => {
  const sorted = [...users].sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Leaderboard</h2>
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="p-3">Rank</th>
              <th className="p-3">Name</th>
              <th className="p-3">Points</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((user, index) => (
              <tr
                key={user._id}
                className={`border-t ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="p-3 font-medium">{index + 1}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;

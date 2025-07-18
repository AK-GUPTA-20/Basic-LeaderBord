import React from "react";
import { toast } from "react-toastify";

const ClaimButton = ({ selectedUser, onClaimed }) => {
  const handleClaim = async () => {
    if (!selectedUser) {
      toast.warn("⚠️ Please select a user first.");
      return;
    }

    const res = await fetch("http://localhost:5000/api/claim", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: selectedUser }),
    });

    const data = await res.json();
    if (data.success) {
      toast.success(`✅ Claimed ${data.claimedPoints} points!`);
      onClaimed();
    } else {
      toast.error("❌ Something went wrong.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={handleClaim}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold 
                   px-6 py-3 rounded-xl shadow-lg 
                   hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out"
      >
        🚀 Claim Points
      </button>
    </div>
  );
};

export default ClaimButton;

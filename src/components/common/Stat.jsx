import React from "react";

function Stat({ number, label }) {
  return (
    <div className="text-center">
      <p className="text-xl md:text-2xl font-bold text-white">{number}</p>
      <p className="text-xs md:text-sm text-gray-500">{label}</p>
    </div>
  );
}

export default Stat;
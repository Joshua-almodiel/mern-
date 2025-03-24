import React from 'react';

const SummaryCard = ({ icon, text, number }) => {
  return (
    <div className="flex items-center p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition duration-200 cursor-pointer">
      <div className="p-3 bg-gray-600 rounded-lg flex items-center justify-center">
        {React.cloneElement(icon, { className: "text-2xl text-white" })}
      </div>

      <div className="ml-4">
        <p className="text-sm text-gray-300 font-medium">{text}</p>
        <p className="text-xl font-semibold text-white mt-1">{number}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
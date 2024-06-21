import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm rounded bg-white overflow-hidden shadow-xl m-4 transition duration-300 transform hover:scale-105">
      <div className="px-6 py-4">
        <div className="font-semibold capitalize text-xl mb-4 text-center">{title}</div>
        <p className="text-gray-800 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;

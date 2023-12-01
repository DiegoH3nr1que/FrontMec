// components/Card.js
import React from 'react';

const Card = ({ title, value, colorClass, widthClass, heightClass }) => {
  const cardClasses = `${colorClass} ${widthClass} ${heightClass} p-4 rounded-md shadow-md`;

  return (
    <div className={cardClasses}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

export default Card;

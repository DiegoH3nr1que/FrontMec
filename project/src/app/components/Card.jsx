// components/Card.js
import React, { useState } from "react";

const Card = ({
  title,
  colorClass,
  widthClass,
  heightClass,
  initialTimeValue,
}) => {
  // Estado local para armazenar o valor de tempo
  const [timeValue, setTimeValue] = useState(initialTimeValue);

  // Função auxiliar para formatar o valor de tempo
  const formatTime = (hours) => {
    if (hours == 1) {
      return `${hours} hora`;
    } else {
      return `${hours} horas`;
    }
  };

  const formattedTime = formatTime(timeValue);
  const cardClasses = `${colorClass} ${widthClass} ${heightClass}  p-4 rounded-md shadow-md`;

  return (
    <div className={cardClasses}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold">{formattedTime}</p>
    </div>
  );
};

export default Card;

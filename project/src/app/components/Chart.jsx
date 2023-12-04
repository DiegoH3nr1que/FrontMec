import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Horas estudadas',
        backgroundColor: 'rgba(255, 165, 0 , 0.5)',
        borderColor: 'rgba(255, 165, 0 ,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 165, 0 ,0.8)',
        hoverBorderColor: 'rgba(255, 165, 0 ,1)',
        data: [4, 9, 3, 4, 6, 8, 3],
      },
    ],
  });

  useEffect(() => {
    // Configurações do gráfico
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Criação do gráfico
    const myChart = new Chart(chartRef.current, {
      type: 'bar',
      data: chartData,
      options,
    });

    // Limpeza ao desmontar o componente
    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  return (
    <div className="bg-gray-100 w-[50%] h-[30%] p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-black">Gráfico de Horas estudadas por dia</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;

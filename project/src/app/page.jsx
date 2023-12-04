"use client";
import React from "react";
import Card from "./components/Card";
import Chart from "./components/Chart"; // Certifique-se de que o caminho e o nome do arquivo estão corretos
import ChartComponentPie from "./components/ChartPie";

const Home = () => {
  return (
    <div className="rounded bg-white h-ful w-full p-4 md:p-8 lg:p-12">
      <header className="flex h-1/5 md:h-1/6 items-center ml-4 md:ml-10 text-black text-3xl md:text-5xl mb-5">
        <img src="./ADSMEC_logo.png" className="h-12 w-12" alt="Logo" />
        <div className="text-yellow-400 ml-2 md:ml-4">Dashboards</div>
      </header>

      <div className="flex flex-row bg-gray-200 p-10 rounded gap-5">
        <Chart className="bg-purple-500 text-white rounded-lg p-4 h-[70%]" title="Tempo de estudo por dia" />
        <div className="md:w-1/3 grid md:grid-rows-2 gap-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center text-center">
            <Card
              title="Tempo de Estudo na semana"
              initialTimeValue={10}
              colorClass="bg-black text-yellow-400"
              widthClass="w-full md:w-64"
            />
            <Card
              title="Tempo de Estudo no dia"
              initialTimeValue={1}
              colorClass="bg-yellow-400 text-black"
              widthClass="w-full md:w-64"
            />
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <ChartComponentPie className="text-white rounded-lg p-4 h-[70%]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

"use client";
import React from "react";
import Card from "./components/Card";
import Chart from "./components/Chart"; // Certifique-se de que o caminho e o nome do arquivo estão corretos

const Home = () => {
  return (
    <div className="rounded bg-white h-ful w-full p-4 md:p-8 lg:p-12">
      <header className="flex h-1/5 md:h-1/6 items-center ml-4 md:ml-10 text-black text-3xl md:text-5xl mb-5">
        <img src="./ADSMEC_logo.png" className="h-12 w-12" alt="Logo" />
        <div className="text-yellow-400 ml-2 md:ml-4">Dashboards</div>
      </header>

      <div className="flex flex-row bg-slate-300 p-10 rounded gap-5">
        <Chart className="bg-purple-500 text-white rounded-lg p-4 h-[70%]" />
        <div className="md:w-1/3 grid md:grid-rows-2 gap-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center text-center">
            <Card
              title="Valor 1"
              value="100"
              colorClass="bg-gray-400"
              widthClass="w-full md:w-64"
            />
            <Card
              title="Valor 2"
              value="200"
              colorClass="bg-yellow-500"
              widthClass="w-full md:w-64"
            />
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <Card
              title="Valor 3"
              value="300"
              colorClass="bg-gray-500"
              widthClass="w-full md:w-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

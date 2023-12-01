// pages/index.js
import React from "react";
import Card from "./components/Card";
import Chart from "./components/Chart";

const Home = () => {
  return (
    <div className=" rounded bg-white h-screnn ">
      <header className=" flex h-[20vh] gap-5 items-center ml-10 text-black text-[30px]">
        <img src="./ADSMEC_logo.png" className="h-12 w-12" />
        <div className=" text-yellow-400">Dashboards</div>
      </header>

      <div className="flex flex-row h-[80vh] w-[220vh] ">
        <div className="flex w-[100%] justify-center items-center bg-gray-100">
          <Chart className="bg-purple-500 text-white rounded-lg" />
        </div>
        <div className=" bg-gray-100 text-center grid grid-rows-2">
          <div className="flex gap-10">
            <Card title="Valor 1" value="100" colorClass="bg-gray-300" widthClass={"80px"} />
            <Card title="Valor 2" value="200" colorClass="bg-yellow-500" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Card title="Valor 3" value="300" colorClass="bg-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

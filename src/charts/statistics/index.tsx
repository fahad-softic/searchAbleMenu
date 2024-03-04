import React from "react";
import ReactApexChart from "react-apexcharts";

const Statistics = () => {
  const series = [
    {
      name: "Deposit",
      data: [10, 41, 35, 51, 49, 62, 39],
    },
    {
      name: "Withdraw",
      data: [15, 48, 43, 59, 79, 72, 29],
    },
  ];

  const options: any = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
        tools: {
          download: false, // <== line to add
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3.5,
    },
    colors: ["#21DF63", "#E22A2A"],
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
  };

  return (
    <div className="mb-[32px] bg-[#fff] rounded-lg p-4">
      <h1>Statistics</h1>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Statistics;

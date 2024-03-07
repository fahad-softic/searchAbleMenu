import React from "react";
import ReactApexChart from "react-apexcharts";

const BetPlaced = () => {
  const series = [
    {
      name: "Single",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Accumulator",
      data: [11, 20, 18, 61, 52, 89, 90],
    },
  ];

  const options: any = {
    chart: {
      height: 350,
      type: "area",
      legend: {
        show: true,
        position: "bottom",
      },
      toolbar: {
        show: false,
        tools: {
          download: false, // <== line to add
        },
      },
    },
    colors: ["#0BDD0B", "#798df5"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [5, 2, 5],
      dashArray: [0, 7, 3],
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className="bg-[#fff] p-4 rounded-lg mb-8">
      <div id="chart">
        <h1>BetPlaced</h1>

        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BetPlaced;

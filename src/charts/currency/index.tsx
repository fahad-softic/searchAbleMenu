import React from "react";
import ReactApexChart from "react-apexcharts";

const Currency = () => {
  const series = [44, 100, 55, 41, 17, 15];

  const options: any = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["BDT", "USD", "INR", "KD", "EUR", "CAD", "GBP", "BHD"],
    colors: [
      "#0B83DA",
      "#28D863",
      "#EEA516",
      "#E64A4F",
      "#9A59D3",
      "#36D8CC",
      "#F26425",
      "#F28185",
    ],
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="bg-[#FFF7F7] p-4 rounded-lg mb-8">
      <h1>Currency Wise Bet Placed</h1>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="donut" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Currency;

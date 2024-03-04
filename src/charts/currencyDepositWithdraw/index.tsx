import React from "react";
import ReactApexChart from "react-apexcharts";

const CurrencyDepositWithdraw = () => {
  const series = [
    { name: "Deposit", data: [44, 55, 41, 64, 22] },
    { name: "Withdraw", data: [53, 32, 33, 52, 13] },
  ];

  const options: any = {
    chart: {
      type: "bar",
      height: 430,
      toolbar: {
        show: true,
        tools: {
          download: false, // <== line to add
        },
      },
    },

    colors: ["#21DF63", "#E22A2A"],
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: ["BDT", "TRX", "USD", "EUR", "BTC"],
      style: {
        colors: ["#BEBFCB"],
        paddingTop: "5px",
        fontSize: "20px",
      },
    },
  };

  return (
    <div className="mb-8 bg-[#ffffff] rounded-lg p-4">
      <h1>Currency Wise Deposit and Withdraw</h1>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={430}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default CurrencyDepositWithdraw;

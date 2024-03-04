import React from "react";
import ReactApexChart from "react-apexcharts";

const BetType = () => {
  const colors = ["#F6866A", "#7661E2"];

  const series = [
    {
      data: [45, 65],
    },
  ];

  const options: any = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
      toolbar: {
        show: false,
        tools: {
          download: false, // <== line to add
        },
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 4,
        distributed: true,
        dataLabels: {
          position: "top",
        },
      },
    },

    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -30,
      style: {
        fontSize: "19px",
        colors: ["#304758"],
        marginBottom: "30px",
      },
      position: "top",
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Single", "Accumulator"],
      position: "bottom",
      labels: {
        style: {
          colors: colors,
          fontSize: "12px",
        },
      },
    },
  };

  return (
    <div className="bg-[#ffffff] p-4 rounded-lg mb-8">
      <h1 className=" font-bold">Bet Type</h1>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BetType;

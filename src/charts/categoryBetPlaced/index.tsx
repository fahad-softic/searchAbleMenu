import React from "react";
import ReactApexChart from "react-apexcharts";

const CategoryWiseBetPlaced = () => {
  const series = [44, 55, 13, 43];

  const options: any = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Sports", "Casino", "Live", "Live Casino"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      colors: ["transparent"],
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
    <div className="bg-[#ffffff] p-4 rounded-lg">
      <h1>Category Wise Bet Placed</h1>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default CategoryWiseBetPlaced;

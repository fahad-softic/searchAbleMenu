import React from "react";
import ReactApexChart from "react-apexcharts";
import "./country.scss";
const CountryWiseUserRatio = () => {
  const series = [
    {
      name: "End User",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "Agent",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: "Affiliate",
      data: [11, 17, 15, 15, 21, 14],
    },
  ];

  const options: any = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    colors: ["#FA45FA", "#09EFEF", "#F8A013"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      type: "country",
      categories: [
        "Bangladesh",
        "United States",
        "India",
        "China",
        "Italy",
        "Sri Lanka",
      ],
    },
    legend: {
      position: "top",
      offsetY: 0,
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="bg-[#ffffff] p-4 rounded-lg country-wise-ratio mb-8">
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

export default CountryWiseUserRatio;

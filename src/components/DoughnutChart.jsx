import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,  // ✅ Needed for Doughnut Chart
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend); // ✅ Register required elements

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // ✅ Fix "Canvas is already in use"
      }
    };
  }, []);

  const data = {
    labels: ["Apple", "Banana", "Cherry", "Grape", "Orange"],
    datasets: [
      {
        label: "Fruit Consumption",
        data: [15, 25, 20, 30, 10], // ✅ Values for the chart
        backgroundColor: [ // ✅ Unique colors for each section
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff"
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "60%", // ✅ Makes it a Doughnut (controls the hole size)
    plugins: {
      legend: {
        position: "bottom", // ✅ Moves the legend
      },
      title: {
        display: true,
        text: "Fruit Consumption Doughnut Chart",
      },
    },
  };

  return <Doughnut ref={chartRef} data={data} options={options} />;
};

export default DoughnutChart;

import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,  // ✅ Required for PieChart
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend); // ✅ Correct registrations

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // ✅ Fix "Canvas is already in use"
      }
    };
  }, []);

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "Users by Color Preference",
        data: [10, 20, 15, 30, 25], // ✅ Pie chart data
        backgroundColor: [ // ✅ Must be unique colors for each slice
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "User Preferences by Color",
      },
    },
  };

  return <Pie ref={chartRef} data={data} options={options} />;
};

export default PieChart;

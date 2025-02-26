import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement, // ✅ Must be registered for LineChart
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // ✅ Fix "Canvas is already in use"
      }
    };
  }, []);

  const data = {
    labels: ["0s", "1s", "2s", "3s", "4s"],
    datasets: [
      {
        label: "Live Visitors",
        data: [5, 10, 6, 15, 7],
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
        tension: 0.3,
      },
    ],
  };

  return <Line ref={chartRef} data={data} />;
};

export default LineChart;

import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register necessary Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

interface GraphProps {
  startDate: Date;
  endDate: Date;
}

const Graph: React.FC<GraphProps> = ({ startDate, endDate }) => {
  const generateDummyData = (startDate: Date, endDate: Date) => {
    const data = [];
    let currentDate = new Date(startDate);
    const today = new Date();
    while (currentDate <= endDate) {
      data.push({
        date: new Date(currentDate),
        Graph:
          currentDate <= today ? Math.floor(Math.random() * 1000) + 100 : null,
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return data;
  };

  const GraphData = generateDummyData(startDate, endDate);

  // Prepare data for the chart
  const chartData = {
    labels: GraphData.map((data) => data.date.toDateString()),
    datasets: [
      {
        label: "Active Users",
        data: GraphData.map((data) => data.Graph),
        backgroundColor: "#FFFFFF", // Color for the bars
        borderColor: "#FFFFFF", // Border color for the bars
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#FFFFFF", // Change legend text color
        },
      },
      title: {
        display: true,
        text: `Active Users Progress (${startDate.toDateString()} - ${endDate.toDateString()})`,
        color: "#FFFFFF", // Change title text color
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#FFFFFF", // Change X-axis title color
        },
        ticks: {
          color: "#FFFFFF", // Change X-axis ticks color
        },
        // Fixed range for the X-axis to avoid layout shift
        min: 0,
        max: GraphData.length - 1, // Keep X-axis fixed based on the number of data points
        stepSize: 1, // Ensure the X-axis ticks are evenly spaced
      },
      y: {
        title: {
          display: true,
          text: "Active Users",
          color: "#FFFFFF", // Change Y-axis title color
        },
        ticks: {
          color: "#FFFFFF", // Change Y-axis ticks color
          beginAtZero: true, // Keep Y-axis starting at 0
          stepSize: 200, // Set a fixed step size (e.g., every 200 active users)
        },
        // Fixed Y-axis range to prevent it from adjusting dynamically
        min: 0,
        max: 1200, // Fixed max value, can adjust as needed
      },
    },
  };

  return (
    <div className="mt-2 w-full ">
      <h1 className="text-lg font-bold mb-4 text-white">
        Active Users Progress
      </h1>
      <Bar data={chartData} options={chartOptions} height={200} />
    </div>
  );
};

export default Graph;

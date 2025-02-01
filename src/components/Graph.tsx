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
        // Only assign a value for dates up to today
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

  // Updated chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to fill its container
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#FFFFFF", // Legend text color
        },
      },
      title: {
        display: true,
        text: `Active Users Progress (${startDate.toDateString()} - ${endDate.toDateString()})`,
        color: "#FFFFFF", // Title text color
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#FFFFFF", // X-axis title color
        },
        ticks: {
          color: "#FFFFFF", // X-axis ticks color
          autoSkip: true, // Let Chart.js automatically skip labels if necessary
        },
        // Removed min, max, and stepSize as they are not effective for category scales
      },
      y: {
        title: {
          display: true,
          text: "Active Users",
          color: "#FFFFFF", // Y-axis title color
        },
        ticks: {
          color: "#FFFFFF", // Y-axis ticks color
          beginAtZero: true,
          stepSize: 200, // Fixed step size on the y-axis
        },
        min: 0,
        max: 1200, // Fixed max value on the y-axis
      },
    },
  };

  return (
    <div className="mt-2 w-full">
      <h1 className="text-lg font-bold mb-4 text-white">
        Active Users Progress
      </h1>
      {/* Remove the 'height' prop and let the container control the size */}
      <div style={{ height: "100%" }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Graph;

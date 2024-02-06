import { Chart, registerables } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
Chart.register(...registerables)

const ChartComponent = ({ data }) => {
    console.log("===========================")
    console.log(data.map((item) => item.name))
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: 'Count',
        data: data.map((item) => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Names',
        },
      },
    },
  };

  return (
    <div>
      <h2>Chart</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;

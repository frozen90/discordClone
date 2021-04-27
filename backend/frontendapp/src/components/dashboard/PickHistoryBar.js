import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Staurday', 'Sunday'],
  datasets: [
    {
      label: 'Number of Cases',
      data: [12000, 19000, 30000, 50000, 20000, 3000, 9500],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 120, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 120, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export const PickHistoryBar = () => (
  <>
    <div className='header'>
      <h3 className='title' style={{color:'white'}}>Pick history</h3>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default PickHistoryBar;
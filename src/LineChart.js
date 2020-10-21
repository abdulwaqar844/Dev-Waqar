import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Smester 1','Smester 2','Smester 3','Smester 4'],
  datasets: [
    {
      label: 'MCS Grades',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3.35, 3.40, 3.31, 3.45]
    }
  ]
};

export default function LineChart() {
    return (
      <div>
        <h2>MCS CGPA by Smester 2018-2020 by Line Chart</h2>
        <Line data={data}  height={30}  width={120} />
      </div>
    );
  }
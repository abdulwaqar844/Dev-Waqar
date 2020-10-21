
import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['1st Smester','2nd Smester','3rd Smester','4th Smester'],
    datasets: [
        {
            label: 'MCS CGPA',
            backgroundColor: 'rgba(66, 135, 245)',
            borderColor: 'rgba(70, 240, 226)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(47, 250, 40)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [3.35, 3.40, 3.31, 3.45,0]
        }
    ]
};

function BarChart() {
    return (
        <div>
            <h2>MCS CGPA by Smester 2018-2020 </h2>
            <Bar
                data={data}
                width={50}
                height={20}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
}export default BarChart;
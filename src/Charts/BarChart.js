import React from "react";
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import './Chart.css';


function BarChart({standings}) {
  var conferencesLabels = [];
  var conferencesData = [];
  standings.map((record) => {
      let totalScored = 0;
      record.teamRecords.map((team) => {
      totalScored += team.goalsScored;
      });
      conferencesLabels.push(record.division.name);
      conferencesData.push(totalScored)
  });

    const data = {
        labels: conferencesLabels,
        datasets: [
          {
            label: 'Total Scored by Division',
            data: conferencesData,
            backgroundColor: [  
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)", 
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

    return (
        <div className="chart">
            <Bar
                options={options}
                data={data}
            />
        </div>
    );
}

export default BarChart;
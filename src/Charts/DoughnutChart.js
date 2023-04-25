import React from "react";
import Chart from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2';
import './Chart.css';


function DoughnutChart({teams}) {


  const topTen = teams.slice(0, 10);
  var teamsLabels = [];
  var teamsData = [];
  topTen.map((record) => {
    teamsLabels.push(record.team.name);
    teamsData.push(record.regulationWins);
  });

  const data = {
    labels: teamsLabels,
    datasets: [
      {
        label: 'Regulation Wins',
        data: teamsData,
         backgroundColor: [  
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)"
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
            <Doughnut
                options={options}
                data={data}
            />
        </div>
    );
}

export default DoughnutChart;
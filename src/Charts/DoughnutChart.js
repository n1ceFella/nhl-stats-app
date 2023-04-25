import React from "react";
import Chart from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2';
import './Chart.css';


function DoughnutChart({standings}) {

  var scoresByDivision = null;
  for(let i = 0; i < standings.records.length; i++){
    let totalScored = 0;
    for(let j = 0; j < standings.records[i].teamRecords.length; j++){
      totalScored += standings.records[i].teamRecords[j].goalsScored;
    }
    scoresByDivision[standings.records[i].division] = totalScored;
  }

    const data = {
      labels: Object.keys(scoresByDivision),
        // labels: [
        //     "Red",
        //     "Orange",
        //     "Yellow",
        //     "Olive",
        //     "Green",
        //     "Teal",
        //     "Blue",
        //     "Navy",
        //     "Purple",
        //     "Fuchsia"
        //   ],
        datasets: [
          {
            label: 'Divisions',
            // data: [5, 7, 20, 14, 2, 3, 1, 12, 10, 13, 5, 4, 13, 18, 16, 4, 11, 7, 1, 12, 10, 18, 19, 16, 4, 9, 9, 5, 12, 17, 2, 6],
            //data: [5, 7, 20, 14, 2, 3, 1, 12, 10, 13],
            data : Object.values(scoresByDivision),
            backgroundColor: [  
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                // "rgba(153, 102, 255, 1)",
                // "rgba(255, 159, 64, 1)",
                // "rgba(255, 99, 132, 0.5)",
                // "rgba(54, 162, 235, 0.5)",
                // "rgba(255, 206, 86, 0.5)",
                // "rgba(75, 192, 192, 0.5)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1.5)",
                "rgba(54, 162, 235, 1.5)",
                "rgba(255, 206, 86, 1.5)",
                "rgba(75, 192, 192, 1.5)",
                // "rgba(153, 102, 255, 1.5)",
                // "rgba(255, 159, 64, 1.5)",
                // "rgba(255, 99, 132, 1)",
                // "rgba(54, 162, 235, 1)",
                // "rgba(255, 206, 86, 1)",
                // "rgba(75, 192, 192, 1)"
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
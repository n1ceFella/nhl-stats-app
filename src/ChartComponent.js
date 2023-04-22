import React from "react";
import Chart from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2';
import './ChartComponent.css';


function ChartComponent() {

    const data = {
        labels: [
            "Red",
            "Orange",
            "Yellow",
            "Olive",
            "Green",
            "Teal",
            "Blue",
            "Navy",
            "Purple",
            "Fuchsia",
            // "Maroon",
            // "Lime",
            // "Forest Green",
            // "Light Sea Green",
            // "Dodger Blue",
            // "Midnight Blue",
            // "Deep Sky Blue",
            // "Steel Blue",
            // "Aqua",
            // "Light Blue",
            // "Powder Blue",
            // "Sky Blue",
            // "Light Gray",
            // "Dark Gray",
            // "Medium Gray",
            // "Silver",
            // "Dim Gray",
            // "Gray",
            // "Light Slate Gray",
            // "Slate Gray",
            // "Dark Slate Gray",
            // "Black",
            // "White"
          ],
        datasets: [
          {
            label: '# of Votes',
            // data: [5, 7, 20, 14, 2, 3, 1, 12, 10, 13, 5, 4, 13, 18, 16, 4, 11, 7, 1, 12, 10, 18, 19, 16, 4, 9, 9, 5, 12, 17, 2, 6],
            data: [5, 7, 20, 14, 2, 3, 1, 12, 10, 13],
            backgroundColor: [  
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                // "rgba(153, 102, 255, 0.5)",
                // "rgba(255, 159, 64, 0.5)",
                // "rgba(255, 99, 132, 0.8)",
                // "rgba(54, 162, 235, 0.8)",
                // "rgba(255, 206, 86, 0.8)",
                // "rgba(75, 192, 192, 0.8)",
                // "rgba(153, 102, 255, 0.8)",
                // "rgba(255, 159, 64, 0.8)",
                // "rgba(255, 99, 132, 0.3)",
                // "rgba(54, 162, 235, 0.3)",
                // "rgba(255, 206, 86, 0.3)",
                // "rgba(75, 192, 192, 0.3)",
                // "rgba(153, 102, 255, 0.3)",
                // "rgba(255, 159, 64, 0.3)",
                // "rgba(255, 99, 132, 0.9)",
                // "rgba(54, 162, 235, 0.9)",
                // "rgba(255, 206, 86, 0.9)",
                // "rgba(75, 192, 192, 0.9)",
                // "rgba(153, 102, 255, 0.9)",
                // "rgba(255, 159, 64, 0.9)",
                // "rgba(255, 99, 132, 0.1)",
                // "rgba(54, 162, 235, 0.1)",
                // "rgba(255, 206, 86, 0.1)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1.5)",
                "rgba(54, 162, 235, 1.5)",
                "rgba(255, 206, 86, 1.5)",
                "rgba(75, 192, 192, 1.5)",
                "rgba(153, 102, 255, 1.5)",
                "rgba(255, 159, 64, 1.5)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                // "rgba(153, 102, 255, 1)",
                // "rgba(255, 159, 64, 1)",
                // "rgba(255, 99, 132, 1.8)",
                // "rgba(54, 162, 235, 1.8)",
                // "rgba(255, 206, 86, 1.8)",
                // "rgba(75, 192, 192, 1.8)",
                // "rgba(153, 102, 255, 1.8)",
                // "rgba(255, 159, 64, 1.8)",
                // "rgba(255, 99, 132, 1.3)",
                // "rgba(54, 162, 235, 1.3)",
                // "rgba(255, 206, 86, 1.3)",
                // "rgba(75, 192, 192, 1.3)",
                // "rgba(153, 102, 255, 1.3)",
                // "rgba(255, 159, 64, 1.3)",
                // "rgba(255, 99, 132, 1.9)",
                // "rgba(54, 162, 235, 1.9)",
                // "rgba(255, 206, 86, 1.9)",
                // "rgba(75, 192, 192, 1.9)",
                // "rgba(153, 102, 255, 1.9)",
                // "rgba(255, 159, 64, 1.9)",
                // "rgba(255, 99, 132, 1.1)",
                // "rgba(54, 162, 235, 1.1)",
                // "rgba(255, 206, 86, 1.1)"
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

export default ChartComponent;
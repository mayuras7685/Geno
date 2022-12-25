const data = {
  labels: [
    "Clean Environment",
    "Quality of Doubt Resoultion",
    "Effectiveness of time table",
    "Presenting more Sporting & Artistic events",
    "Providing Laboratory & workshoe facilities ",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [4.14, 3.96, 3.85, 3.92, 4.39],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
}

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
}

const barChart = new Chart(document.getElementById("barChart"), config)

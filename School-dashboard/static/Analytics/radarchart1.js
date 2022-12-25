const data2 = {
  labels: [
    "Level of Courses (Difficulty)",
    "Course Relevence",
    "Critical Learning of learner",
  ],
  datasets: [
    {
      label: "Rated Greater Than 2",
      data: [27, 24, 19],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Rated Lower Than or Equal to 2",
      data: [27, 3, 9],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
}

const config2 = {
  type: "radar",
  data: data2,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
}

const radar2Chart = new Chart(document.getElementById("radar2Chart"), config2)

const data3 = {
  labels: [
    "Discrimination prevention",
    "Group Performance",
    "Extracurricular",
    "Individual Attention",
    "Problem Solved",
    "Age-based Conversations",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [4, 4.17, 3.92, 4.1, 5, 4.46],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
}

const config3 = {
  type: "line",
  data: data3,
}

const lineChart = new Chart(document.getElementById("lineChart"), config3)

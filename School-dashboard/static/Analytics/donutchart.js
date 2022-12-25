const data1 = {
  labels: ["🤗", "😄", "🙂", "😐", "🙁"],
  datasets: [
    {
      label: "Menatla Health",
      data: [55, 10, 13, 17, 5],
      backgroundColor: [
        "rgb(174, 214, 157)",
        "rgb(183, 230, 230)",
        "rgb(255, 235, 187)",
        "rgb(255, 222, 89)",
        "rgb(255, 118, 118)",
      ],
      hoverOffset: 4,
    },
  ],
}

const config1 = {
  type: "doughnut",
  data: data1,
}

const donutChart = new Chart(document.getElementById("donutChart"), config1)

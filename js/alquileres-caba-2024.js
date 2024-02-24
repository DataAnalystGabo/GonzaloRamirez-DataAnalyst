const ctx = document.getElementById("ambientes");



// ctx.parentElement.style.height = "200px";
// ctx.parentElement.style.width = "200px";




new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      "Dos ambientes",
      "Tres ambientes",
      "Un ambientes",
      "Dos ambientes",
      "Cuatro ambientes"
    ],
    datasets: [{
      label: 'Departamentos',
      data: [689, 392, 343, 689, 199],
      borderWidth: 1.5,
      borderColor: [
        "rgba(242, 133, 133, 1)",
        "rgba(142, 122, 181, 1)",
        "rgba(255, 164, 71, 1)",
        "rgba(183, 132, 183, 1)",
        "rgba(255, 252, 155, 1)"
      ],
      backgroundColor: [
        "rgba(242, 133, 133, .5)",
        "rgba(142, 122, 181, .5)",
        "rgba(255, 164, 71, .5)",
        "rgba(183, 132, 183, .5)",
        "rgba(255, 252, 155, .5)",
        "rgba(228, 147, 179, .5)",
        "rgba(183, 229, 180, .5)",
        "rgba(238, 165, 166, .5)",
        "rgba(145, 149, 246, .5)",
        "rgba(251, 136, 180, .5)"
      ]
    }]
  },
  options: {
    scales: {
      y: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false
  }
});









/*
[
  {
      ambientes: 2,
      freq: 689,
      labels: "Dos ambientes"
  },
  {
      ambientes: 3,
      freq: 392,
      labels: "Tres ambientes"
  },
  {
      ambientes: 1,
      freq: 343,
      labels: "Un ambientes"
  },
  {
      ambientes: 2,
      freq: 689,
      labels: "Dos ambientes"
  },
  {
      ambientes: 4,
      freq: 199,
      labels: "Cuatro ambientes"
  },
  {
      ambientes: 5,
      freq: 55,
      labels: "Cinco ambientes"
  },
  {
      ambientes: 0,
      freq: 39,
      labels: "Monoambiente"
  },
  {
      ambientes: 6,
      freq: 21,
      labels: "Seis ambientes"
  },
  {
      ambientes: 7,
      freq: 4,
      labels: "Siete ambientes"
  },
  {
      ambientes: 8,
      freq: 2,
      labels: "Ocho ambientes"
  },
  {
      ambientes: 9,
      freq: 1,
      labels: "Nueve ambientes"
  },
  {
      ambientes: 10,
      freq: 1,
      labels: "Diez ambientes"
  }
]
*/
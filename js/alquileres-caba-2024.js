const ctx_ambientes = document.getElementById("environments").getContext("2d");
const ctx_dormitorios = document.getElementById("rooms");
const ctx_bathrooms = document.getElementById("bathrooms");


new Chart(ctx_ambientes, {
  type: "bar",
  data: {
    labels: [
      "Dos ambientes",
      "Tres ambientes",
      "Un ambiente",
      "Cuatro ambientes",
      "Cinco ambientes",
      "Monoambiente",
      "Seis ambientes",
      "Siete ambientes",
      "Ocho ambientes",
      "Nueve ambientes",
      "Diez ambientes"
    ],
    datasets: [{
      label:"",
      data: [689, 392, 343, 199, 55, 39, 21, 4, 2, 1, 1],
      backgroundColor: [
        "rgba(255, 89, 94, .5)",
        "rgba(255, 202, 58, .5)",
        "rgba(106, 76, 147, .5)",
        "rgba(197, 202, 48, .5)",
        "rgba(86, 90, 160, .5)",
        "rgba(138, 201, 38, .5)",
        "rgba(25, 130, 196, .5)",
        "rgba(255, 146, 76, .5)",
        "rgba(54, 148, 157, .5)",
        "rgba(66, 103, 172, .5)"
      ],
      borderColor: [
        "rgba(255, 89, 94, .7)",
        "rgba(255, 202, 58, .7)",
        "rgba(106, 76, 147, .7)",
        "rgba(197, 202, 48, .7)",
        "rgba(86, 90, 160, .7)",
        "rgba(138, 201, 38, .7)",
        "rgba(25, 130, 196, .7)",
        "rgba(255, 146, 76, .7)",
        "rgba(54, 148, 157, .7)",
        "rgba(66, 103, 172, .7)"
      ],
      borderWidth: 2
    }]
  },
  options: {
    tooltips: false,
    plugins: {
		datalabels: {
       anchor: 'end',
       backgroundColor: function(context) {
        return context.dataset.backgroundColor;
       },
       borderColor: 'white',
       borderRadius: 5,
       borderWidth: 0,
       color: 'white',
       display: function(context) {
         let dataset = context.dataset;
         let count = dataset.data.length;
         let value = dataset.data[context.dataIndex];
         return value > count * 1.5;
       },
       formatter: Math.round,
       font: {
         weight: 'bold',
         size: '16'
       },
      }
    },
  },
});



new Chart(ctx_dormitorios, {
  type: 'doughnut',
  data: {
    labels: [
      "Un dormitorio",
      "Dos dormitorios",
      "Sin datos",
      "Tres dormitorios",
      "Cuatro dormitorios",
      "Cinco dormitorios",
      "Seis dormitorios"
    ],
    datasets: [{
      label: "Departamentos",
      data: [819, 402, 260, 222, 38, 4, 2],
      borderWidth: 1.5,
      borderColor: [
        "rgba(255, 89, 94, .7)",
        "rgba(255, 202, 58, .7)",
        "rgba(106, 76, 147, .7)",
        "rgba(197, 202, 48, .7)",
        "rgba(86, 90, 160, .7)",
        "rgba(138, 201, 38, .7)"
      ],
      backgroundColor: [
        "rgba(255, 89, 94, .5)",
        "rgba(255, 202, 58, .5)",
        "rgba(106, 76, 147, .5)",
        "rgba(197, 202, 48, .5)",
        "rgba(86, 90, 160, .5)",
        "rgba(138, 201, 38, .5)"
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


new Chart(ctx_bathrooms, {
  type: 'doughnut',
  data: {
    labels: [
      "Un baño",
      "Dos baños",
      "Tres baños",
      "Sin datos",
      "Cuatro baños",
      "Cinco baños",
      "Seis baños"
    ],
    datasets: [{
      label: "Baños",
      data: [1285, 320, 79, 30, 22, 9, 2],
      borderWidth: 1.5,
      borderColor: [
        "rgba(255, 89, 94, .7)",
        "rgba(255, 202, 58, .7)",
        "rgba(106, 76, 147, .7)",
        "rgba(197, 202, 48, .7)",
        "rgba(86, 90, 160, .7)",
        "rgba(138, 201, 38, .7)",
        "rgba(25, 130, 196, .7)"
      ],
      backgroundColor: [
        "rgba(255, 89, 94, .5)",
        "rgba(255, 202, 58, .5)",
        "rgba(106, 76, 147, .5)",
        "rgba(197, 202, 48, .5)",
        "rgba(86, 90, 160, .5)",
        "rgba(138, 201, 38, .5)",
        "rgba(25, 130, 196, .5)"
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
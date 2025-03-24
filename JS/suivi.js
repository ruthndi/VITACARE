// Graphique pour l'évolution de la glycémie
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("glycemiaChart").getContext("2d");
    var glycemiaChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], // Exemple de jours
        datasets: [{
          label: 'Niveau de glycémie (mg/dL)',
          data: [120, 130, 125, 110, 140, 135, 115], // Données d'exemple
          borderColor: 'orange',
          borderWidth: 2,
          fill: false,
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              stepSize: 20
            }
          }
        }
      },
  });
});
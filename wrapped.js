// Gráfica de porcentajes (100%)
const percentageCtx = document.getElementById('percentageChart').getContext('2d');
const percentageChart = new Chart(percentageCtx, {
    type: 'pie',
    data: {
        labels: ['Rap', 'R&B'],
        datasets: [{
            label: 'Porcentajes',
            data: [66.6, 33.3], // Estos números deben sumar 100
            backgroundColor: [
                'rgba(148, 238, 0, 1)',
                'rgba(255, 166, 0, 1)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.raw + '%';
                        return label;
                    }
                }
            }
        }
    }
});

// Gráfica de horas
const hoursCtx = document.getElementById('hoursChart').getContext('2d');
const hoursChart = new Chart(hoursCtx, {
    type: 'pie',
    data: {
        labels: ['Cruz Cafune', 'AquihayAquihay', 'Tino el Pingüino'],
        datasets: [{
            label: 'Horas',
            data: [5, 6, 5], // Distribución de horas
            backgroundColor: [
                'rgba(6, 54, 183, 1)',
                'rgba(247, 156, 8, 1)',
                'rgba(240, 116, 224, 1)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.raw + ' horas';
                        return label;
                    }
                }
            }
        }
    }
});
percentageDepor = document.getElementById('percentageDep').getContext('2d');
const percentageDep = new Chart(percentageDepor, {
    type: 'pie',
    data: {
        labels: ['Futbol', 'Gym'],
        datasets: [{
            label: 'Porcentajes',
            data: [20, 80], // Estos números deben sumar 100
            backgroundColor: [
                'rgba(255, 1, 47, 1)',
                'rgba(1, 201, 255, 1)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.raw + '%';
                        return label;
                    }
                }
            }
        }
    }
});
const percentageEnt = document.getElementById('percentageEntre').getContext('2d');
const percentageEntre = new Chart(percentageEnt, {
    type: 'pie',
    data: {
        labels: ['Spotify', 'Youtube', 'Tik Tok', 'Twitch', 'Netflix'],
        datasets: [{
            label: 'Porcentajes de Uso de Plataformas',
            data: [45, 23, 15, 10, 7],
            backgroundColor: [
                'rgba(30, 215, 96, 0.8)',
                'rgba(255, 0, 0, 0.8)',
                'rgba(0, 242, 234, 0.8)',
                'rgba(145, 70, 255, 0.8)',
                'rgba(229, 9, 20, 0.8)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 2,
            hoverBackgroundColor: [
                'rgba(30, 215, 96, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 242, 234, 1)',
                'rgba(145, 70, 255, 1)',
                'rgba(229, 9, 20, 1)'
            ],
            hoverBorderColor: [
                'rgba(30, 215, 96, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 242, 234, 1)',
                'rgba(145, 70, 255, 1)',
                'rgba(229, 9, 20, 1)'
            ],
            hoverBorderWidth: 3
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'rgba(0, 0, 0, 0.8)',
                    font: {
                        color: 'rgba(255, 255, 255, 1)',
                        size: 14,
                        family: 'Arial, sans-serif'
                    }
                }
            },
            title: {
                display: true,
                text: 'Distribución de Uso de Plataformas de Entretenimiento',
                color: 'rgba(0, 0, 0, 0.8)',
                font: {
                    size: 18,
                    family: 'Arial, sans-serif',
                    weight: 'bold'
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.raw + '%';
                        return label;
                    }
                }
            }
        }
    }
});

const searchInput = document.getElementById('search');
const eventsList = document.getElementById('events-list');

// Filtrado de eventos


// Mostrar más detalles
const toggleButtons = document.querySelectorAll('.toggle-details');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const moreDetails = this.nextElementSibling; // Obtener el siguiente elemento (detalles adicionales)
        if (moreDetails.style.display === "none" || moreDetails.style.display === "") {
            moreDetails.style.display = "block"; // Mostrar detalles
            this.innerText = "Mostrar menos"; // Cambiar texto del botón
        } else {
            moreDetails.style.display = "none"; // Ocultar detalles
            this.innerText = "Mostrar más"; // Cambiar texto del botón
        }
    });
});
// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{
            label: 'Cruz Cafune',
            data: [1, 1, 20, 1, 1, 1, 1, 1],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: 'AquihayAquihay',
            data: [1, 1, 1, 1, 20, 1, 1, 1],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'Tino el Pingüino',
            data: [1, 1, 1, 1, 1, 1, 1, 20],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        label: 'Horas',
        labels: ['Gym', 'Futbol'],
        datasets: [{
            data: [24, 6],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(255, 159, 64, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1
        }]
    }
});

// Doughnut Chart
const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
const doughnutChart = new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Spotify', 'Youtube', 'Tik Tok', 'Twitch', 'Netflix'],
        datasets: [{
            data: [95, 40, 27, 12.5, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
});

const barrCtx = document.getElementById('barrChart').getContext('2d');
const barrChart = new Chart(barrCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{
            label: 'Semana Diabla - HoV',
            data: [1, 1, 1, 3, 1, 1, 1, 1],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: 'Hackathon, AngelHack',
            data: [1, 1, 1, 18, 1, 1, 1, 1],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'Gamergy Mexico',
            data: [1, 1, 1, 1, 1, 1, 1, 8],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Second Pie Chart
const secondPieCtx = document.getElementById('secondPieChart').getContext('2d');
const secondPieChart = new Chart(secondPieCtx, {
    type: 'pie',
    data: {
        labels: ['GTA', 'Valorant', 'Rocket', 'Fall Guys', 'Mortal Kombat'],
        datasets: [{
            label: 'Horas',
            data: [9, 8, 8, 5, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
});

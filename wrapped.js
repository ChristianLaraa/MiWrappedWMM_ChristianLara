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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
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
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
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
            label: 'Porcentajes',
            data: [45, 23, 15, 10, 7 ], // Estos números deben sumar 100
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
            ],
            borderWidth: 1
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

const searchInput = document.getElementById('search');
const eventsList = document.getElementById('events-list');

// Filtrado de eventos
searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    const events = eventsList.getElementsByTagName('li');

    for (let event of events) {
        const title = event.querySelector('h3').innerText.toLowerCase();
        if (title.includes(query)) {
            event.style.display = '';
        } else {
            event.style.display = 'none';
        }
    }
});

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


const ctx3 = document.getElementById('OEEBarChart').getContext('2d');
const OEEbarChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['SSPPR201', 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206',],
        datasets: [{
            label: 'OEE',
            data: [60, 40, 75, 20, 10, 5],
            backgroundColor: 'rgb(78, 159, 61,0.5)',
            borderRadius: 3,
        }]
    },
    options: {
        scales: {
            y: {beginAtZero: true},
            x: {display: false}
        }
    }
});

const ctx2 = document.getElementById('MTTRBarChart').getContext('2d');
const MTTRbarChart = new Chart(ctx2, {

    type: 'bar',
    data: {
        labels: ['SSPPR201', 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206'],
        datasets: [{
            label: 'MTTR',
            data: [25, 28, 3, 40, 1, 7],
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

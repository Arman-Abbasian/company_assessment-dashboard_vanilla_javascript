const ctx1 = document.getElementById('MTBFBarChart').getContext('2d');
const MTBFbarChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['SSPPR201', 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206','SSPPR201',
                 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206','SSPPR206','SSPPR201',
                 'SSPPR201', 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206','SSPPR201',
                 'SSPPR201', 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206','SSPPR201',
                 'SSPPR201', 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206','SSPPR201',
                 'SSPPR201', 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206','SSPPR201',
                 'SSPPR201', 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206','SSPPR201',
                 'SSPPR201', 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206','SSPPR201',
                 'SSPPR201', 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206','SSPPR201',
                 'SSPPR201', 'SSPPR202', 'SSPPR203', 'SSPPR204', 'SSPPR205', 'SSPPR206','SSPPR201',
                ],
        datasets: [{
            label: 'MTBF',
            data: [12, 19, 3, 5, 2, 3,25,12, 19, 3, 5, 2, 3,25,12, 19, 3, 5, 2, 3,
                    12, 19, 3, 5, 2, 3,25,12, 19, 3, 5, 2, 3,25,12, 19, 3, 5, 2, 3,
                    12, 19, 3, 5, 2, 3,25,12, 19, 3, 5, 2, 3,25,12, 19, 3, 5, 2, 3,
                    12, 19, 3, 5, 2, 3,25,12, 19, 3
                ],
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

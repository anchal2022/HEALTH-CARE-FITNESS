// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3'],
        datasets: [{
            label: 'BMI Progress',
            data: [21.5, 23, 22],
            borderColor: '#f57c00',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});

// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Calories Burned',
            data: [200, 300, 400, 500, 600, 700, 800],
            backgroundColor: '#f57c00'
        }]
    },
    options: {
        responsive: true
    }
});

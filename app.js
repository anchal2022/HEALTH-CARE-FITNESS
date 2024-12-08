// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3'],
        datasets: [{
            label: 'BMI Progress',
            data: [22, 23, 21],
            borderColor: '#ff9800',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true
    }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Calories Burned', 'Calories Consumed'],
        datasets: [{
            data: [60, 40],
            backgroundColor: ['#ff9800', '#2196f3']
        }]
    },
    options: {
        responsive: true
    }
});

// Button Navigation
document.getElementById('backBtn').addEventListener('click', () => {
    window.location.href = 'verification.html';
});

document.getElementById('nextBtn').addEventListener('click', () => {
    window.location.href = 'dashboard.html';
});
// Example Chart.js Configuration for Labels
const options = {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                color: '#ffffff', // White color for better visibility
                font: {
                    size: 14, // Adjust size for better readability
                },
            },
        },
    },
    scales: {
        x: {
            ticks: {
                color: '#ffffff',
                font: {
                    size: 12, // Adjust font size for x-axis labels
                },
            },
        },
        y: {
            ticks: {
                color: '#ffffff',
                font: {
                    size: 12, // Adjust font size for y-axis labels
                },
            },
        },
    },
};


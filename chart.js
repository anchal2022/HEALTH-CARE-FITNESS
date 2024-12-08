const ctx = document.getElementById('progressChart').getContext('2d');

const progressChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Workout Progress',
            data: [10, 20, 30, 25, 35, 50],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Progress Points'
                }
            }
        }
    }
});

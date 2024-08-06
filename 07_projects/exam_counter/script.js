let countdownInterval;
let progressChart;

function startCountdown() {
    const examDateInput = document.getElementById('examDateInput').value;
    if (!examDateInput) {
        alert('Please select a date.');
        return;
    }

    const examDate = new Date(examDateInput);
    localStorage.setItem('examDate', examDate);

    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(() => updateCountdown(examDate), 1000);
    updateCountdown(examDate); // Initial call to set values immediately
}

function updateCountdown(examDate) {
    const now = new Date();
    const timeLeft = examDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'Exam time!';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function updateProgress() {
    const subjects = ['math', 'physics', 'chemistry'];
    const progressData = {};

    subjects.forEach(subject => {
        const chapters = document.querySelectorAll(`#${subject} .chapter input`);
        let totalProgress = 0;
        let chapterCount = 0;

        chapters.forEach(chapter => {
            const progress = parseInt(chapter.value) || 0;
            totalProgress += progress;
            chapterCount++;
        });

        const averageProgress = chapterCount > 0 ? totalProgress / chapterCount : 0;
        progressData[subject] = averageProgress;
    });

    localStorage.setItem('progressData', JSON.stringify(progressData));
    displayProgressChart(progressData);
}

function displayProgressChart(progressData) {
    if (progressChart) {
        progressChart.destroy();
    }

    const ctx = document.getElementById('progressChart').getContext('2d');
    progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Math', 'Physics', 'Chemistry'],
            datasets: [{
                label: 'Progress (%)',
                data: [progressData.math, progressData.physics, progressData.chemistry],
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

window.onload = () => {
    const savedExamDate = localStorage.getItem('examDate');
    if (savedExamDate) {
        const examDate = new Date(savedExamDate);
        countdownInterval = setInterval(() => updateCountdown(examDate), 1000);
        updateCountdown(examDate); // Initial call to set values immediately
    }

    const savedProgressData = localStorage.getItem('progressData');
    if (savedProgressData) {
        const progressData = JSON.parse(savedProgressData);
        displayProgressChart(progressData);

        const subjects = ['math', 'physics', 'chemistry'];
        subjects.forEach(subject => {
            const chapters = document.querySelectorAll(`#${subject} .chapter input`);
            chapters.forEach((chapter, index) => {
                const savedProgress = progressData[subject][index] || 0;
                chapter.value = savedProgress;
            });
        });
    }
};

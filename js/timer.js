document.addEventListener('DOMContentLoaded', function () {
    let timerInterval = null;
    let seconds = 300;
    const display = document.getElementById('timerDisplay');

    function updateDisplay() {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    document.getElementById('timerStart').addEventListener('click', function () {
        if (timerInterval) return;
        timerInterval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert('🧘 Timpul de meditație s-a încheiat. Respiră adânc și simte-ți pacea interioară.');
            }
        }, 1000);
    });

    document.getElementById('timerPause').addEventListener('click', function () {
        clearInterval(timerInterval);
        timerInterval = null;
    });

    document.getElementById('timerReset').addEventListener('click', function () {
        clearInterval(timerInterval);
        timerInterval = null;
        seconds = 300;
        updateDisplay();
    });

    updateDisplay();

    console.log('Timer meditație încărcat cu succes!');
});